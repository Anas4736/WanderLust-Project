const Listing = require("../models/listing");
const axios = require('axios');

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render('listings/index.ejs', { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render('listings/new.ejs');
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author", }, }).populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect('/listings');
  }
  console.log(listing);
  res.render('listings/show.ejs', { listing });
};

module.exports.createListing = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  // Forward geocode using LocationIQ
  const location = req.body.listing.location; // or address field
  const apiKey = process.env.LOCATIONIQ_KEY; // Add your LocationIQ key to .env

  try {
    const geoRes = await axios.get(
      `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(location)}&format=json`
    );
    if (geoRes.data && geoRes.data[0]) {
      newListing.geometry = {
        type: "Point",
        coordinates: [
          parseFloat(geoRes.data[0].lon),
          parseFloat(geoRes.data[0].lat)
        ]
      };
    }
  } catch (e) {
    newListing.geometry = { type: "Point", coordinates: [0, 0] }; // fallback
  }

  // Save image if using Cloudinary
  if (req.file) {
    newListing.image = { url: req.file.path, filename: req.file.filename };
  }

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect(`/listings/${newListing._id}`);
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect('/listings');
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render('listings/edit.ejs', { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res, next) => {
  const { id } = req.params;
  const updatedData = req.body.listing;

  // Forward geocode if location is changed
  if (updatedData.location) {
    const apiKey = process.env.LOCATIONIQ_KEY;
    try {
      const geoRes = await axios.get(
        `https://us1.locationiq.com/v1/search?key=${apiKey}&q=${encodeURIComponent(updatedData.location)}&format=json`
      );
      if (geoRes.data && geoRes.data[0]) {
        updatedData.geometry = {
          type: "Point",
          coordinates: [
            parseFloat(geoRes.data[0].lon),
            parseFloat(geoRes.data[0].lat)
          ]
        };
      }
    } catch (e) {
      // fallback or handle error
      updatedData.geometry = { type: "Point", coordinates: [0, 0] };
    }
  }

  // Update the listing
  const listing = await Listing.findByIdAndUpdate(id, updatedData, { new: true });

  // If you handle image upload, update image as well here

  req.flash("success", "Listing updated!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success", "New Listing Deleted!");
  res.redirect('/listings');
};