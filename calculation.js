$(document).ready(function() {
  gather();
  let slim = new SlimSelect({
    select: "#social",
    showSearch: false
  });
});
$("form").keyup(gather);
$("select").change(gather);

// EDI START HERE
// Link to platform
var hootsuite_link = "https://hootsuite.com";
var socialpilot_link = "https://www.socialpilot.co/?fp_ref=own-digital";
var socialoomph_link = "https://www.socialoomph.com/?referredby=aff-2537787514";
var agorapulse_link = "http://www.agorapulse.com/?fp_ref=own-digital";
var communit_link = "https://commun.it/";
var crowdfire_link = "https://www.crowdfireapp.com/";
var loomly_link = "https://www.loomly.com/free-trial/3d2ba2c4af08e3d4";
var planable_link = "http://planable.io/?fp_ref=james71";
var missinglettr_link = "https://lttr.ai/EU1K";
var viraltag_link = "https://viraltag.grsm.io/jamescooper8138";

// Image url platform
var hootsuite_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/hootsuite.png";
var socialpilot_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/spilot.png";
var socialoomph_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/socialoomph.png";
var agorapulse_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/agorapulse.png";
var communit_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/communit.png";
var crowdfire_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/crowdfireapp.png";
var loomly_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/loomly.png";
var planable_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/planable.png";
var missinglettr_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/missinglettr.png";
var viraltag_image = "https://cdn.jsdelivr.net/gh/Convoboss/social-media-management-system-cost-comparison-tool/images/viraltag.png";
// EDIT STOP HERE

// Autoupdate generator
function gather() {
  base();
  hootsuite();
  socialpilot();
  socialoomph();
  agorapulse();
  communit();
  crowdfire();
  loomly();
  planable();
  missinglettr();
  viraltag();
}

// Check the social media availability
function socialCheck(superset, subset) {
  if (0 === subset.length) {
    return false;
  }
  return subset.every(function(value) {
    return superset.indexOf(value) >= 0;
  });
}

// Check the input
function base() {
  var budget = $("#budget").val();
  budget = budget.replace(/\D/g, "");
  var social = $("#social").val();
  return { social, budget };
}

// Hootsuite
function hootsuite() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "ig", "yt", "li", "tw", "pi"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 0) {
    if (budget >= 599) {
      content = ["Business", "<div>$599/mo</div>", "30", "10"];
    } else if (budget >= 99) {
      content = ["Team", "<div>$99/mo</div>", "20", "3"];
    } else if (budget >= 19) {
      content = ["Professional", "<div>$19/mo</div>", "10", "1"];
    } else {
      content = ["Free", "<div>$0</div>", "3", "1"];
    }
  }
  var platform = "hootsuite";
  var link = hootsuite_link;
  var image = hootsuite_image;
  return tulis(platform, link, image, content);
}

// Social Pilot
function socialpilot() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li", "gb", "ig", "pi", "tu"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 9) {
    if (budget >= 84) {
      content = ["Agency", "<div>$83.33/mo annually</div>", "100", "10"];
      if (budget >= 100) {
        content[1] = "<div>$83.33/mo annually</div><div>$100/mo monthly</div>";
      }
    } else if (budget >= 42) {
      content = ["Small Team", "<div>$41.66/mo annually</div>", "50", "5"];
      if (budget >= 50) {
        content[1] = "<div>$41.66/mo annually</div><div>$50/mo monthly</div>";
      }
    } else if (budget >= 25) {
      content = ["Professional", "<div>$25/mo annually</div>", "25", "3"];
      if (budget >= 30) {
        content[1] = "<div>$25/mo annually</div><div>$30/mo monthly</div>";
      }
    } else {
      content = ["Individual", "<div>$8.33/mo annually</div>", "5", "1"];
    }
  }
  var platform = "socialpilot";
  var link = socialpilot_link;
  var image = socialpilot_image;
  return tulis(platform, link, image, content);
}

// Socialoomph
function socialoomph() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "li", "tw", "pi"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 0) {
    if (budget >= 49.5) {
      content = ["Business", "<div>$49.5/mo annually</div>", "20", "1"];
      if (budget >= 55) {
        content[1] = "<div>$49.5/mo annually</div><div>$55/mo monthly</div>";
      }
    } else if (budget >= 23) {
      content = ["Professional", "<div>$22.5/mo annually</div>", "10", "1"];
      if (budget >= 25) {
        content[1] = "<div>$22.5/mo annually</div><div>$25/mo monthly</div>";
      }
    } else if (budget >= 14) {
      content = ["Advanced", "<div>$14.5/mo annually</div>", "1", "1"];
      if (budget >= 15) {
        content[1] = "<div>$14.5/mo annually</div><div>$15/mo monthly</div>";
      }
    } else {
      content = ["Personal", "<div>$0</div>", "1", "1"];
    }
  }
  var platform = "socialoomph";
  var link = socialoomph_link;
  var image = socialoomph_image;
  return tulis(platform, link, image, content);
}

// Agorapulse
function agorapulse() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "ig", "li", "yt"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 79) {
    if (budget >= 459) {
      content = ["Enterprise", "<div>$459/mo annually</div>", "70", "20"];
      if (budget >= 499) {
        content[1] = "<div>$459/mo annually</div><div>$499/mo monthly</div>";
      }
    } else if (budget >= 239) {
      content = ["X-Large", "<div>$239/mo annually</div>", "40", "12"];
      if (budget >= 299) {
        content[1] = "<div>$239/mo annually</div><div>$299/mo monthly</div>";
      }
    } else if (budget >= 159) {
      content = ["Large", "<div>$159/mo annually</div>", "25", "6"];
      if (budget >= 199) {
        content[1] = "<div>$159/mo annually</div><div>$199/mo monthly</div>";
      }
    } else {
      content = ["Medium", "<div>$79/mo annually</div>", "10", "3"];
      if (budget >= 99) {
        content[1] = "<div>$79/mo annually</div><div>$99/mo monthly</div>";
      }
    }
  }
  var platform = "agorapulse";
  var link = agorapulse_link;
  var image = agorapulse_image;
  return tulis(platform, link, image, content);
}

// Communit
function communit() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "li", "tw"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 0) {
    if (budget >= 118) {
      content = ["Corporate", "<div>$117.99/mo</div>", "12", "15"];
    } else if (budget >= 25) {
      content = ["Business", "<div>$24.99/mo</div>", "6", "4"];
    } else if (budget >= 20) {
      content = ["Pro", "<div>$19.99/mo</div>", "2", "1"];
    } else {
      content = ["Free", "<div>$0</div>", "1", "1"];
    }
  }
  var platform = "communit";
  var link = communit_link;
  var image = communit_image;
  return tulis(platform, link, image, content);
}

// Crowdfire
function crowdfire() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li", "ig", "pi"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 0) {
    if (budget >= 75) {
      content = ["VIP", "<div>$74.98/mo annually</div>", "50", "3"];
      if (budget >= 100) {
        content[1] =
          "<div>$74.98/mo annually</div><div>$99.99/mo monthly</div>";
      }
    } else if (budget >= 38) {
      content = ["Premium", "<div>$37.48/mo annually</div>", "5", "2"];
      if (budget >= 50) {
        content[1] =
          "<div>$37.48/mo annually</div><div>$49.99/mo monthly</div>";
      }
    } else if (budget >= 8) {
      content = ["Plus", "<div>$7.48/mo annually</div>", "2", "1"];
      if (budget >= 9) {
        content[1] = "<div>$7.48/mo annually</div><div>$9.99/mo monthly</div>";
      }
    } else if (social !== "pi") {
      content = ["Free", "<div>$0</div>", "1", "1"];
    }
  }
  var platform = "crowdfire";
  var link = crowdfire_link;
  var image = crowdfire_image;
  return tulis(platform, link, image, content);
}

// Loomly
function loomly() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li", "ig", "pi"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 20) {
    if (budget >= 228) {
      content = ["Premium", "<div>$208/mo annually</div>", "60", "26"];
      if (budget >= 305) {
        content[1] = "<div>$208/mo annually</div><div>$305/mo monthly</div>";
      }
    } else if (budget >= 108) {
      content = ["Advanced", "<div>$108/mo annually</div>", "40", "16"];
      if (budget >= 145) {
        content[1] = "<div>$108/mo annually</div><div>$145/mo monthly</div>";
      }
    } else if (budget >= 54) {
      content = ["Standard", "<div>$54/mo annually</div>", "20", "6"];
      if (budget >= 73) {
        content[1] = "<div>$54/mo annually</div><div>$73/mo monthly</div>";
      }
    } else {
      content = ["Base", "<div>$20/mo annually</div>", "10", "2"];
      if (budget >= 27) {
        content[1] = "<div>$20/mo annually</div><div>$27/mo monthly</div>";
      }
    }
  }
  var platform = "loomly";
  var link = loomly_link;
  var image = loomly_image;
  return tulis(platform, link, image, content);
}

// Planable
function planable() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li", "ig", "pi"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 39) {
    if (budget >= 99) {
      content = ["Premium", "<div>$99/mo</div>", "5", "7"];
    } else {
      content = ["Starter", "<div>$39/mo</div>", "1", "3"];
    }
  }
  var platform = "planable";
  var link = planable_link;
  var image = planable_image;
  return tulis(platform, link, image, content);
}

// Missinglettr
function missinglettr() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 22) {
    if (budget >= 80) {
      content = ["Business", "<div>$80/mo annually</div>", "25", "Unlimited"];
      if (budget >= 97) {
        content[1] = "<div>$80/mo annually</div><div>$97/mo monthly</div>";
      }
    } else {
      content = ["Individual", "<div>$22/mo annually</div>", "5", "1"];
      if (budget >= 27) {
        content[1] = "<div>$22/mo annually</div><div>$27/mo monthly</div>";
      }
    }
  }
  var platform = "missinglettr";
  var link = missinglettr_link;
  var image = missinglettr_image;
  return tulis(platform, link, image, content);
}

// Viraltag
function viraltag() {
  var social = base().social;
  var budget = base().budget;
  var mysocial = ["fb", "tw", "li", "ig", "pi", "tu"];
  var content = ["No Plan", "-", "-", "-"];
  if (socialCheck(mysocial, social) && budget >= 24) {
    if (budget >= 249) {
      content = ["Brand", "<div>$249/mo</div>", "50", "5"];
    } else if (budget >= 79) {
      content = ["Small Business", "$<div>79/mo annually</div>", "25", "3"];
      if (budget >= 99) {
        content[1] = "<div>$79/mo annually</div><div>$99/mo monthly</div>";
      }
    } else {
      content = ["Individual", "<div>$24/mo annually</div>", "10", "1"];
      if (budget >= 29) {
        content[1] = "<div>$24/mo annually</div><div>$29/mo monthly</div>";
      }
    }
  }
  var platform = "viraltag";
  var link = viraltag_link;
  var image = viraltag_image;
  return tulis(platform, link, image, content);
}

// This will generate the HTML
function tulis(platform, link, image, content) {
  $("tr." + platform).html(
    '<td class="platform"><a href="' +
      link +
      '" target="_blank" class="open-link"><img src="' +
      image +
      '">' +
      platform +
      "</a></td>" +
      '<td class="plan"><b>' +
      content[0] +
      "</b></td>" +
      '<td class="price">' +
      content[1] +
      "</td>" +
      '<td class="account">' +
      content[2] +
      " profiles</td>" +
      '<td class="member">' +
      content[3] +
      " users</td>"
  );
}
