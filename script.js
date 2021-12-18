const input = document.getElementById("url-input");
const resultContainer = document.getElementsByClassName("result")[0];
const urlLink = "https://gotiny.cc/";
const getURL = () => {
  const getUrlResponse = async () => {
    try {
      const url = await fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: `${input.value}` }),
      });

      const receivedResponse = await url.json();
      console.log(receivedResponse);
      return receivedResponse;
    } catch (e) {
      console.log(e);
      resultContainer.innerHTML = `<h4 class="result-link-text">Oops, something went wrong!</h4>`;
      return;
    }
  };

  getUrlResponse()
    .then((response) => {
      console.log(response.code);
      resultContainer.innerHTML = `<h4 class="result-link-text"><span>Shortened URL : </span><a href="${
        urlLink + response["0"].code
      }" alt="response-link" target="_blank">${
        urlLink + response["0"].code
      }<a/>`;
    })
    .catch((error) => {
      resultContainer.innerHTML = `<h4 class="result-link-text">Oops, something went wrong!</h4>`;
      console.log(error);
    });
};
