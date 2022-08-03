((win, doc) => {
  const onLoad = () => {
    const qrCodeGenerate = doc.getElementById("qrcode-generate");
    const qrCodeInput = doc.getElementById("qrcode-input");

    let value = "https://www.frontendmentor.io/";
    qrCodeInput.value = value;

    const qrcode = new QRCode("qrcode", {
      colorDark: "#fff",
      colorLight: "transparent",
    });

    const makeQrCode = () => {
      qrcode.makeCode(value);
    };

    makeQrCode();

    const formSubmit = (event) => {
      event.preventDefault();
      if (!value) {
        alert("Empty input");
        return;
      }
      makeQrCode();
    };

    const inputChange = (event) => {
      value = event.target.value;
    };

    qrCodeGenerate.addEventListener("submit", formSubmit);
    qrCodeInput.addEventListener("keyup", inputChange);
  };

  win.addEventListener("load", onLoad);
})(window, document);
