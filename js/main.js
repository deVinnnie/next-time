window.onload = function(){
            Presenter.init(
                    {
                        "gap": 0,
                        "thumbnail_width": 300,
                        "ticker-position": "left",
                        "scale": 0.95
                    }
            );
            $("#splash").fadeOut(3500,
                function(){
                    $("#splash").remove();
                }
            );
};
