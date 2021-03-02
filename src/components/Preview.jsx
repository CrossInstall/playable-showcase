import React from "react";

function viewPreview() {
  return (
    <div className="clr">
      <div className="view">
        <div className="advertiser-preview-container iphone-portrait">
          <iframe
            title="Test"
            id="advertiser-preview-iframe"
            className="advertiser-preview-iframe portrait"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default viewPreview;
// function changeBackground(env) {
//   setContainer();
//   if (!preview_container.hasClass(`${env}-orientation_mode`)) {
//     if (env === "ipad") {
//       preview_container.removeClass(
//         `android-${orientation_mode} iphone-${orientation_mode}`
//       );
//       preview_frame.removeClass(orientation_mode);
//       preview_frame.addClass(`ipad-size-${orientation_mode}`);
//     } else {
//       preview_frame.removeClass("ipad-size-" + orientation_mode);
//       preview_frame.addClass(orientation_mode);
//       if (env === "iphone") {
//         preview_container.removeClass(
//           `android-${orientation_mode} ipad-${orientation_mode}`
//         );
//       } else if (env === "android") {
//         preview_container.removeClass(
//           `iphone-${orientation_mode} ipad-${orientation_mode}`
//         );
//       }
//     }
//     preview_container.addClass(`${env}-${orientation_mode}`);
//     current_type = env;
//     getCreative();
//   }
// }

// function getCreative() {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "{{ preview_url }}", true);
//   xhr.responseType = "text";
//   xhr.onerror = function () {
//     document.getElementById("advertiser-preview-iframe").srcdoc =
//       '<div style="color:white;position: absolute; left: 10%;">This ad has failed automated QA. <br> Please contact your account manager.</div>';
//   };
//   xhr.onload = function (event) {
//     document.getElementById(
//       "advertiser-preview-iframe"
//     ).srcdoc = this.response
//       .replace(
//         /var ad_dynamic_parameters \= \".*\"\;/,
//         'var ad_dynamic_parameters = "{{url_params|raw}}";'
//       )
//       .replace(
//         /var ad_has_custom_load_screen \= true/,
//         "var ad_has_custom_load_screen = false"
//       );
//   };
//   xhr.send();
// }
// function setContainer() {
//   preview_frame = $("#advertiser-preview-iframe");
//   preview_container = $(".advertiser-preview-container");
// }
// function changeOrientation() {
//   preview_container.removeClass(current_type + "-" + orientation_mode);
//   if (orientation_mode == "landscape") {
//     orientation_mode = "portrait";
//     $(".lens").css("left", "33%");
//   } else {
//     orientation_mode = "landscape";
//     $(".lens").css("left", "15%");
//   }
//   preview_container.addClass(current_type + "-" + orientation_mode);
// }
// function rotateAd() {
//   setContainer();
//   if (
//     preview_frame.hasClass("portrait") ||
//     preview_frame.hasClass("ipad-size-portrait")
//   ) {
//     preview_frame.removeClass("portrait ipad-size-portrait");
//     if (current_type === "ipad") {
//       preview_frame.addClass("ipad-size-landscape");
//     } else {
//       preview_frame.addClass("landscape");
//     }
//     changeOrientation();
//   } else {
//     preview_frame.removeClass("landscape ipad-size-landscape");
//     if (current_type === "ipad") {
//       preview_frame.addClass("ipad-size-portrait");
//     } else {
//       preview_frame.addClass("portrait");
//     }
//     changeOrientation();
//   }
//   getCreative();
// }

// var orientation_mode = "portrait";
// var current_type = "iphone";
// var preview_frame, preview_container;
// $(document).ready(function() {
//   getCreative();
//   $('.toggle').toggles({clicker:$('.clickme')});
//   $(".rotate-btn").on("click", rotateAd);
//   $(".iphone-btn").on("click", function() {
//     changeBackground('iphone');
//   });
//   $(".ipad-btn").on("click", function() {
//     changeBackground('ipad');
//   });
//   $(".android-btn").on("click", function() {
//     changeBackground('android');
//   });
//   // Mobile redirects to the real ad
//   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     // Do not escape URL params for mobile environment redirection (leave raw)
//     window.location = "{{ mobile_url }}&{{ url_params|raw }}";
//   }
// });

//

/* <script>
    //To override the less file but just for this page
    $("body").css("background-color", "#000");

  </script>
{% endblock %} */

// <link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css"></link>
// <link rel="stylesheet" type="text/css" href="public/css/bootstrap-select.min.css"></link>
// <link rel="stylesheet" type="text/css" href="public/css/jquery-ui.min.css"></link>
// <link rel="stylesheet" type="text/css" href="public/css/toggles-full.css"></link>

/* /* <script src="{{ asset('external/js/jquery.js') }}"></script>
  <script src="{{ asset('external/js/jquery-ui.js') }}"></script>
  <script src="{{ asset('external/js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('external/js/bootstrap-select.min.js') }}"></script>
  <script src="{{ asset('external/js/toggles.min.js') }}"></script> */
