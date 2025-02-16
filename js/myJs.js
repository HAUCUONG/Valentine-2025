const textConfig = {
  text1: "Xin chào người đẹp😘🌹",
  text2: "Anh có điều này muốn hỏi👉👈 Người đẹp nhớ phải trả lời đúng nhaaa.",
  text3: "Bảo bối có đồng ý đón Valentine dới a suốt đời hông? ._.",
  text4: "Anh biết là bảo bối mún lắm đúng hông nè😆👉👈",
  text5: "Hămmm😆(hông được chọn cái này nhen😤)",
  text6: "Mún nhắm nhun óoooo🥰💋🧡🧡",
  text7: "Lí do bảo bối đồng ý là gì ó?👉👈",
  text8: "Gửi cho tồnggg😘🍊🧡🧡",
  text9: "Tại vì chỉ có anh mới có thể là nửa trái cam của bé thuiii!",
  text10: "💘Dear My Half Orange💘",
  text11:
    "Mặc dù hông được ở gần nhau nhưng điều này sẽ không ngăn được tình yêu anh dành cho em yêu mỗi ngày. Yêu xa là một thử thách lớn nhưng sẽ là một kết thúc tươi đẹp nếu vượt qua được nên hai đứa mình hãy cùng nhau cố gắng nha em yêu💋. Chúc em yêu của anh ngày Valentine thiệt là hạnh phúc nhaaa🥰🌹🧡🧡. Gửi em yêu ngàn nụ hônnn😘💋💋. Love you, my Half Orange!🧡🧡",
  text12:
    "Nếu em yêu nhớ anh thì bấm vào nút này để nhắn tin cho anh nhaaa🥰💋😆",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(123, 0, 0, 0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location =
              "https://www.facebook.com/messages/e2ee/t/7322390177837843";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
(function () {
  function playMusic() {
    var myAudio = document.getElementById("playAudio");
    if (myAudio.duration > 0 && !myAudio.paused) {
      //Its playing...do your job
    } else {
      myAudio.play();
      //Not playing...maybe paused, stopped or never played.
    }
  }

  /*Initialize flowers*/
  document
    .querySelector(".swal2-confirm")
    .addEventListener("click", function () {
      playMusic();
    });
})("sweaverD.com");
