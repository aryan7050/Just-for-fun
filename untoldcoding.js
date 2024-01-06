$(document).ready(function () {
      const container = $(".container");

        $(".title").click(function () {
            container.addClass("open");
              });

                $(".close").click(function () {
                    container.removeClass("open");
                      });

                        // Close the container when clicking outside of it on mobile
                          $(document).on("click touchstart", function (event) {
                              if (!$(event.target).closest('.container').length) {
                                    container.removeClass("open");
                                        }
                                          });
                                          });
                                          
})