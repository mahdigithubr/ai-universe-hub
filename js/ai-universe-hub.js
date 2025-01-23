// load ai data
const loadData = async (isCalled) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const allData = await res.json();
  const aiHub = allData.data.tools;
  console.log(isCalled);
  displayAiHub(aiHub, isCalled);
};

// display all ai
const displayAiHub = (aiHub, isCalled) => {
  const aiHubContainer = document.getElementById("ai-hub-container");

  if (aiHub.length > 6) {
    document.getElementById("show-all").classList.remove("hidden");
  }
  //   checked clicked show all button
  if (!isCalled) {
    aiHub = aiHub.slice(0, 6);
  } else {
    console.log("hello ");
    document.getElementById("show-all").classList.add("hidden");
  }

  aiHub.forEach((ai) => {
    const aiDiv = document.createElement("div");
    aiDiv.classList = "card card-compact bg-base-100 border   p-6";
    console.log(ai);
    aiDiv.innerHTML = `
              <figure class="rounded-2xl flex-1">
            <img
              src="${ai?.image}"
              alt="Ai Image"
            />
          </figure>
          <div class="space-y-3 mt-4 flex-1">
            <h2 class="card-title">Feature</h2>
            <ol class="list-decimal list-inside">
              <li>${ai?.features[0]}</li>
              <li>${ai?.features[1]}</li>
              <li>${ai?.features[2]}</li>
            </ol>
            <hr class="border-gray-400" />
            <div class="flex justify-between items-center">
              <p>
                <span class="card-title">${ai?.name || "name not found"}</span
                ><svg
                  class="inline"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                    stroke="#585858"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                ${ai?.published_in || "ai ont publish data"}
              </p>
              <button  onclick="handelMoreInformation('${
                ai.id
              }')"  class="p-2 rounded-full bg-[#FEF7F7]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                    stroke="#EB5757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
    `;

    aiHubContainer.appendChild(aiDiv);
  });
};

function handelShowAll() {
  loadData(true);
}

const showMoreInformation = (aiDetails) => {
  my_modal_3.showModal();
  console.log(aiDetails);
  document.getElementById("ai-details-container").innerHTML = `

              <div
                class="bg-[#EB57570d] border p-5 border-primary rounded-lg flex-1 space-y-4"
              >
                <h3 class="lg:text-2xl text-xl  font-semibold">
                  ${
                    aiDetails?.description ||
                    "Facebook Ai is a collection of tools and technologies developed by Facebook to advance the field of artificial intelligence."
                  }
                </h3>
                <!-- ai subscription rate -->
                <div class="flex flex-col md:flex-row items-center lg:justify-between gap-5">
                  <p
                    class="flex items-center justify-center w-[132px] p-5 px-10 text-center bg-white rounded-xl text-[#03A30A] font-extrabold"
                  >
                  ${aiDetails?.pricing[0]?.plan} ${
    aiDetails?.pricing[0]?.price || "Free of Cost/Basic"
  }
                  </p>
                  <p
                    class="flex items-center justify-center w-[132px] p-5 px-10 text-center bg-white rounded-xl text-[#F28927] font-extrabold"
                  >
                      ${aiDetails?.pricing[1]?.plan} ${
    aiDetails?.pricing[1]?.price || "Free Of Cost/Pro"
  }
                  </p>
                  <p
                    class="flex items-center justify-center w-[132px] p-5 px-10 text-center bg-white rounded-xl text-[#EB5757] font-extrabold"
                  >
                     ${aiDetails?.pricing[2]?.plan} ${
    aiDetails?.pricing[2]?.price || "Free of Cost /Enterprise"
  }
                  </p>
                </div>
                <div class="flex flex-col md:flex-row  justify-between gap-3">
                                <!-- ai feature -->
                <div class="space-y-4">
                  <p class="card-title">Features</p>
                  <ul class="list-disc list-inside text-[#585858]">
                    <li>${
                      aiDetails?.features[1]?.feature_name || "Computer Vision"
                    }</li>
                    <li>${
                      aiDetails?.features[2]?.feature_name || "Deep Learning"
                    }</li>
                    <li>${
                      aiDetails?.features[3]?.feature_name || "Machine learning"
                    }</li>
                  </ul>
                </div>
                         <!-- ai integrations -->
                <div class="space-y-4  ">
                  <p class="card-title mr-24">Integrations</p>
                  <ul class="list-disc list-inside text-[#585858]">
                    <li>${aiDetails?.integrations[0] || "No data found"}</li>
                    <li>${aiDetails?.integrations[1] || ""}</li>
                    <li>${aiDetails?.integrations[1] || ""}</li>
                  </ul>
                </div>
                </div>
                <a class="text-center mx-auto block text-primary hover:underline" href="${
                  aiDetails?.website
                }" target="_blank">Website: ${aiDetails?.tool_name}</a>
              </div>


              <div class="flex-1 card card-compact bg-base-100 border p-6">
                <figure class="rounded-2xl ">
                  <img class="h-[337px]" src="${
                    aiDetails?.image_link[0]
                  }" alt="Ai Image" />
                </figure>
                <div class="space-y-3 mt-4  ">
                  <!-- input example -->
                  <h3 class="text-2xl font-semibold text-center mx-auto">
                    ${
                      aiDetails?.input_output_examples[0]?.input ||
                      "Can you give any example?"
                    }
                  </h3>  <!-- output example -->
                  <p class="text-[ #585858] text-center">
                  ${
                    aiDetails?.input_output_examples[1]?.output ||
                    "No! Not Yet! Take a break!!!"
                  }
                  </p>
                </div>                    
                  <p class="bg-primary px-6 inline absolute top-8 right-8 py-3 text-white rounded-xl">
                    <span>${aiDetails?.accuracy?.score}%</span> accuracy
                 </p>
              </div>
   
  `;
};

// show more information of AI
const handelMoreInformation = async (ai) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/${ai}`
  );
  const data = await res.json();
  const fullDetailsAi = data.data;
  showMoreInformation(fullDetailsAi);
};

loadData();
