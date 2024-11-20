const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validatereview, isLoggedIn,isReviewAuthor, saveRedirectUrl} = require("../middleware.js");
const reviewController = require("../controllers/review.js");


router.post("/", isLoggedIn, validatereview ,wrapAsync(reviewController.createReview));

router.delete("/:reviewId", isLoggedIn ,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;