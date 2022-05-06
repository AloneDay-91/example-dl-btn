save_btn = document.querySelector(".div-btn");

    save_btn.onclick = function () {
        this.innerHTML = "<button class='btn-title2'><div class='loader'></div></button>";
          setTimeout(() => {
            this.innerHTML = "<button class='btn-title2'>Open File <i class='fa-solid fa-check'></i></button>";
          }, 5000);
    }