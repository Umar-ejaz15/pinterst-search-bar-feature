let imgContent = [
    {
        name: "Goku",
        img: "https://i.pinimg.com/236x/c1/75/9f/c1759ff4d2211ec898559046f32611c2.jpg",
    },
    {
        name: "Goku ssj",
        img: "https://i.pinimg.com/236x/ad/fa/86/adfa86338fa7617d8285893e31004e6c.jpg",
    },
    {
        name: "vegeta ego",
        img: "https://i.pinimg.com/236x/a8/51/31/a85131b412f0e53f613126c52b4ef9e0.jpg",
    },
    {
        name: "ichigo",
        img: "https://i.pinimg.com/236x/ad/2c/ec/ad2cec757cc4dcf250a79a3e8a6e0ab5.jpg",
    },
    {
        name: "ichigo kurusaki",
        img: "https://i.pinimg.com/236x/d5/3c/78/d53c785a33ace37b6a4aad90bad53028.jpg",
    },
    {
        name: "deku",
        img: "https://i.pinimg.com/236x/dd/75/c1/dd75c14d77cde56ae8bd588c2d4ddcbd.jpg",
    },
    {
        name: "medoria",
        img: "https://i.pinimg.com/236x/d1/3b/a0/d13ba0e36936cda2ad7a424e4ec8e0ee.jpg",
    },
    {
        name: "batman",
        img: "https://i.pinimg.com/236x/98/81/ab/9881abd75810841323c998ba4478dc43.jpg",
    },
];

function imgLoader() {
    var cutler = "";
    imgContent.forEach(function (val) {
        cutler += ` <div class="box flex gap-7">
            <img class="cursor-pointer w-64 h-64 rounded-3xl " src="${val.img}" alt="image">
           
        </div>
            `;
    });
    document.querySelector(".img-container").innerHTML = cutler;
}

function searchBar() {
    var search = document.querySelector("#search");
    var overlay = document.querySelector(".overlay");
    search.addEventListener("focus", () => {
        overlay.style.display = "block";
    });
    search.addEventListener("blur", () => {
        overlay.style.display = "none";
    });
    search.addEventListener("input", () => {
        document.querySelector(".navdown").style.display = "block";
    });
    search.addEventListener("blur", () => {
        document.querySelector(".navdown").style.display = "none";
    });
    search.addEventListener("input", () => {
        var filtterArr = imgContent.filter((val) =>
            val.name.toLowerCase().startsWith(search.value)
        );
        var cutler = "";
        filtterArr.forEach(function (obj) {
            cutler += ` ${obj.name}<br> `;
            document.querySelector(".navdown").innerHTML = cutler;
        });
    });
}

imgLoader();
searchBar();

