
const url = "https://json-fake-api.herokuapp.com/agents";

async function getAgents() {
  const result = await fetch(url);

  const data = await result.json();

  const html = data.map((item) => {
    return `
           <div class="custom-card">
                  <div class="custom-card-header text-center">
                    <div class="img-wrapper">
                      <img
                        src="${item.image}"
                        alt=""
                      />
                    </div>
                    <h5>${item.name}</h5>
                    <p>${item.job}</p>

                    <div class="star">
                      <i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i><i class="fas fa-star"></i
                      ><i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="custom-card-body">
                    <ul>
                      <li>
                        <p>Office</p>
                        <span>${item.office_phone}</span>
                      </li>
                      <li>
                        <p>Mobile</p>
                        <span>${item.phone}</span>
                      </li>
                      <li>
                        <p>Fax</p>
                        <span>+98 0900 098 888</span>
                      </li>
                      <li>
                        <p>Email</p>
                        <span>${item.email}</span>
                      </li>
                      <li>
                        <p>Social</p>
                        <div class="social d-inline-block">
                          <span><i class="fab fa-facebook-f"></i></span>
                          <span><i class="fab fa-twitter"></i></span>
                          <span><i class="fab fa-linkedin-in"></i></span>
                          <span><i class="fab fa-instagram"></i></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
    `;
  });

  document.querySelector("#agents .agent-cards").innerHTML = html.join("");
}

getAgents();