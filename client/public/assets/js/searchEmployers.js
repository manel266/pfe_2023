//variable declaration
const selectBtn = document.querySelectorAll(".select-btn");
items = document.querySelectorAll(".item");
listDynamicItems = document.getElementById("listDynamicItems");
let Skills = document.querySelectorAll('input[name="Skills"]:checked');

itemtext = document.querySelectorAll(".item-text");
//********nav filter************** */
const closeOtherToggleButton = (item) => {
  return selectBtn.forEach((el) => {
    if (el != item) {
      el.classList.remove("open");
    }
  });
};
selectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    item.classList.toggle("open");
    closeOtherToggleButton(item);
  })
);

const FilterTopjobs = {
  jobs: [
    {
      position: "Financial Service",
      title: "Financial Service",
      description:
        "representative's responsibilities include responding to clients' inquiries in a professional manner, providing sound financial advice to clients, cross-selling our products and services where possible, and attending various training programs as required.",
      type: "Hybride",
      skills: ["Account Manager","Magento"],
      TypeOfJob: ["Remote", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: ["First Job"],
      src: "./assets/img/amazon.png",
      offers: 30,
      country: "us",
      location: "english-english",
    },
    {
      position: "Financial Service",
      title: "Financial Service",
      description:
        "representative's responsibilities include responding to clients' inquiries in a professional manner, providing sound financial advice to clients, cross-selling our products and services where possible, and attending various training programs as required.",
      type: "Hybride",
      skills: ["Magento"],
      TypeOfJob: ["On Site", "Remote"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: ["First Job"],
      src: "./assets/img/amazon.png",
      offers: 30,
      country: "us",
      location: "english-english",
    },
    {
      position: "Human resources ",
      title: "Human resources ",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["ENG",'FR'],
      TypeOfJob: ["Remote", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: ["First Job"],
      src: "./assets/img/amazon.png",
      offers: 30,
      country: "us",
      location: "english-english",
    },
    {
      position: "Apps Developements",
      title: "Apps Developements",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "OnSite",
      skills: ["Java & AJAX", "MERN STACK","WordPress"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: ["First Job"],
      src: "./assets/img/lenovo.png",
      offers: 150,
      country: "FR",
      location: "french-paris",
    },
    {
      position: "Apps Developements",
      title: "Apps Developements",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "OnSite",
      skills: ["Java & AJAX", "React js"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 90000,
        to: 100000,
        currency: "USD",
      },
      Experience: ["Manager"],
      src: "./assets/img/lenovo.png",
      offers: 150,
      country: "FR",
      location: "french-paris",
    },
    {
      position: "Art, Design, Media",
      title: "Art, Design, Media",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["iPhone & Android"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: ["Manager"],
      src: "./assets/img/strip.png",
      offers: 22,
      location: "tunis-tunis",
    },
    {
      position: "designer",
      title: "designer",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["react native", "js"],
      TypeOfJob: ["OnSite", "Hybride"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: ["Manager"],
      src: "./assets/img/word.png",
      offers: 500,
      location: "br",
    },
    
    {
      position: "OS admistrator",
      title: "OS admistrator",
      description:
        "You will help us build API for our compression infrastructure.",
      type: "Hybride",
      skills: ["react native", "js"],
      TypeOfJob: ["windows10", "linux"],
      annualSalary: {
        from: 4000,
        to: 10000,
        currency: "USD",
      },
      country: "TN",
      Experience: "first job",
      src: "./assets/img/visa.png",
      offers: 350,
      location: "br",
    },
  ],
};



typeOfJob = document.querySelectorAll("#typeOfJob .item");

typeOfJob.forEach((item) => {
  item.addEventListener("click", (event) => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".item .checked"),
      btnText = document.querySelector("#typeOfJob .btn-text");
  });
});

//********************************** */
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".simple-sidebar").addClass("active");
    $(".menu-btn").addClass("disable");
    $(".main-section").removeClass(
      "main-section col-lg-11 col-md-12 col-sm-12"
    );
    $(".main-section").addClass("col-lg-8");
  });
  $(".close-btn").click(function () {
    $(".simple-sidebar").removeClass("active");
    $(".menu-btn").removeClass("disable");
  });
});
const jobSection = document.getElementById("jobSection");
FilterTopjobs.jobs.forEach((job) => {
  let mainItems = document.createElement("div");
  mainItems.classList.add("col-lg-12");
  let companyTitle = document.createElement("div");
  companyTitle.classList.add("company-Title");
  let row = document.createElement("div");
  row.classList.add("row");
  let logoCompany = document.createElement("div");
  logoCompany.classList.add("col-lg-3", "logoCompany" ,'col-md-2','col-sm-2');
  let logoCompanysrc = document.createElement("img");

  logoCompanysrc.src = job.src;
  //*title and position
  let jobDesc = document.createElement("div");
  jobDesc.classList.add("col-8");
  let div = document.createElement("div");
  let titleJob = document.createElement("div");
  titleJob.classList.add("title-job",'text-wrap');
  titleJob.innerHTML = job.title;
  let contryJob = document.createElement("div");
  contryJob.classList.add("contry-job");
  contryJob.innerHTML = job.country;
  let positionjob = document.createElement("div");
  positionjob.classList.add("position-job");
  positionjob.innerHTML = job.location;
  //append
  logoCompany.appendChild(logoCompanysrc);
  row.appendChild(logoCompany);
  div.appendChild(titleJob);
  div.appendChild(contryJob);
  div.appendChild(positionjob);
  jobDesc.appendChild(div);
  row.appendChild(jobDesc);
  companyTitle.appendChild(row);
  mainItems.appendChild(companyTitle);
  jobSection.appendChild(mainItems);
});
const attr = document.querySelectorAll(".company-Title");

attr.forEach((job) => {
  job.addEventListener("click", () => {
    document.querySelector(".skills-job").innerHTML = "SKILLS :";
    document.querySelector(".skills-job").style =
      "color:#5C80B7;margin-right: 12px;";
    //dom
    FilterTopjobs.jobs.forEach((findjob) => {
      if (findjob.title === job.querySelector(".title-job").innerHTML) {
        document.querySelector(
          ".jb_types"
        ).innerHTML = `${findjob.offers} poste`;
        document.querySelector("._jb_title a").innerHTML = `${findjob.title}`;
        document.querySelector(
          "._emp_jb"
        ).innerHTML = `location: ${findjob.location}`;
        document.querySelector(
          ".description"
        ).innerHTML = `${findjob.description}`;
        document.querySelector(".job-img").src = findjob.src;
        findjob.skills.forEach((skill) => {
          let span = document.createElement("span");
          span.innerHTML = "";
          span.innerHTML = `${skill} , `;
          span.style = "color:#6671B0;margin-left:8px;";
          document.querySelector(".skills-job").appendChild(span);
        });
      }
    });
  });
});

const attrbute = document.querySelectorAll(".company-Title");
attrbute.forEach((job,indx) => {
  job.addEventListener("click", () => {
  
    if(window.innerWidth<=990){
      document.getElementById('jobSection').style="display:none"
      document.getElementById('job-details-hiden').style="display:block"
    }
    window.addEventListener('resize',()=>{
      console.log(window.innerWidth)
      if(window.innerWidth>990){
        document.getElementById('jobSection').style="display:block"
      }
      if(window.innerWidth<=990){
        document.getElementById('jobSection').style="display:none"
        document.getElementById('job-details-hiden').style="display:block"
      }
    })
    document.querySelector('.retourPage').addEventListener('click',()=>{
      console.log('first')
    window.location='http://127.0.0.1:5500/search-employers.html'
    })
 
    document.querySelector(".skills-job").innerHTML = "SKILLS :";
    document.querySelector(".skills-job").style =
      "color:#5C80B7;margin-right: 12px;";
    FilterTopjobs.jobs.forEach((findjob,cntr) => {

      if (findjob.title === job.querySelector(".title-job").innerHTML && indx==cntr) {
        document.querySelector(
          ".jb_types"
        ).innerHTML = `${findjob.offers} poste`;
        document.querySelector("._jb_title a").innerHTML = `${findjob.title}`;
        document.querySelector(
          "._emp_jb"
        ).innerHTML = `location ${findjob.location}`;
        document.querySelector(
          ".description"
        ).innerHTML = `${findjob.description}`;
        document.querySelector(".job-img").src = findjob.src;
        findjob.skills.forEach((skill) => {
          let span = document.createElement("span");
          span.innerHTML = "";
          span.innerHTML = `${skill} , `;
          span.style = "color:#6671B0;margin-left:8px;";
          document.querySelector(".skills-job").appendChild(span);
        });
      }
    });
  });
});
function submitHandler(event) {
  event.preventDefault();
  var arrayJobs=[{}]
  // get Inputs values
  let jobOfferElement = document.querySelector(
    'input[name="jobOffer"]:checked'
  );
  let jobtittle = document.querySelector('input[name="titleJob"]');
  let SkillsElement = document.querySelectorAll('input[name="Skills"]:checked');
  let jobTypeElement = document.querySelectorAll(
    'input[name="jobType"]:checked'
  );
  let ExperienceElement = document.querySelectorAll(
    'input[name="experience"]:checked'
  );
  // Build body request
  if (jobtittle) {
    arrayJobs = FilterTopjobs.jobs.filter(function (i, n) {
      if (jobtittle.value == "All") {
        return i.position
      } else if (i.position == jobtittle.value) {
        return i.position;
      }
    });
    console.log(arrayJobs)
  } else {
    arrayJobs = FilterTopjobs.jobs;
  }
  if (jobOfferElement) {
    arrayJobs = FilterTopjobs.jobs.filter(function (i, n) {
      if (jobOfferElement.value == "All") {
        return i.position
      } else if (i.position == jobOfferElement.value) {
        return i.position;
      }
    });
  
    document.querySelector("#jobsOffers .btn-text").innerHTML =
      jobOfferElement.value;
    document.querySelector("#jobsOffers .select-btn").style =
      "background: #01B753;";
    document.querySelector("#jobsOffers .btn-text").style = "color:white";
  } else {
    
    document.querySelector("#jobsOffers .btn-text").innerHTML = "Jobs Offers";
  }
  if (SkillsElement.length > 0) {
    SkillsElement.forEach((item)=>{
      arrayJobs = arrayJobs.filter(function (i, n) {
        
      if (i.skills.includes(item.value)) {
        console.log(i)
          return i;
        }
    })})
    document.querySelector("#Skills .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#Skills .btn-text"
    ).innerHTML = `Skills(${SkillsElement.length})`;
    document.querySelector("#Skills .btn-text").style = "color:white";
  } else {
  
    document.querySelector("#Skills .btn-text").innerHTML = `Skills`;
    document.querySelector("#Skills .select-btn").style = "background: #fffff;";
    document.querySelector("#Skills .btn-text").style = "color:black";
  }
  if (jobTypeElement.length > 0) {
    jobTypeElement.forEach((item)=>{
      arrayJobs = arrayJobs.filter(function (i, n) {
      if (i.TypeOfJob.includes(item.value)) {
        console.log(i)
          return i;
        }
    })})
    document.querySelector("#typeOfJob .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#typeOfJob .btn-text"
    ).innerHTML = `typeOfJob(${jobTypeElement.length})`;
    document.querySelector("#typeOfJob .btn-text").style = "color:white";
  } else {
    document.querySelector("#typeOfJob .btn-text").innerHTML = `Job Type`;
    document.querySelector("#typeOfJob .select-btn").style =
      "background: #ffffff;";
    document.querySelector("#typeOfJob .btn-text").style = "color:black";
  }
  if (ExperienceElement.length > 0) {
    ExperienceElement.forEach((item)=>{
      arrayJobs = arrayJobs.filter(function (i, n) {
      if (i.Experience.includes(item.value)) {
        console.log(i)
          return i;
        }
    })})
    document.querySelector("#Experience .select-btn").style =
      "background: #01B753;";
    document.querySelector(
      "#Experience .btn-text"
    ).innerHTML = `Experience(${ExperienceElement.length})`;
    document.querySelector("#Experience .btn-text").style = "color:white";
  } else {
    document.querySelector("#Experience .btn-text").innerHTML = `Experience`;
    document.querySelector("#Experience .select-btn").style =
      "background: #ffffff;";
    document.querySelector("#Experience .btn-text").style = "color:black";
  }

  jobSection.innerHTML = "";
  arrayJobs.forEach((job) => {
    let mainItems = document.createElement("div");
    mainItems.classList.add("col-lg-12");
    let companyTitle = document.createElement("div");
    companyTitle.classList.add("company-Title");
    let row = document.createElement("div");
    row.classList.add("row");
    let logoCompany = document.createElement("div");
    logoCompany.classList.add("col-2", "logoCompany");
    let logoCompanysrc = document.createElement("img");
    logoCompanysrc.src = job.src;
    //*title and position
    let jobDesc = document.createElement("div");
    jobDesc.classList.add("col-8");
    let div = document.createElement("div");
    let titleJob = document.createElement("div");
    titleJob.classList.add("title-job");
    titleJob.innerHTML = job.title;
    let contryJob = document.createElement("div");
    contryJob.classList.add("contry-job");
    contryJob.innerHTML = job.country;
    let positionjob = document.createElement("div");
    positionjob.classList.add("position-job");
    positionjob.innerHTML = job.location;
    //append
    logoCompany.appendChild(logoCompanysrc);
    row.appendChild(logoCompany);
    div.appendChild(titleJob);
    div.appendChild(contryJob);
    div.appendChild(positionjob);
    jobDesc.appendChild(div);
    row.appendChild(jobDesc);
    companyTitle.appendChild(row);
    mainItems.appendChild(companyTitle);
    jobSection.appendChild(mainItems);
  });
  
  const attrbute = document.querySelectorAll(".company-Title");
  attrbute.forEach((job,indx) => {
    job.addEventListener("click", () => {
      if(window.innerWidth<=990){
        document.getElementById('jobSection').style="display:none"
        document.getElementById('job-details-hiden').style="display:block"
      }
      window.addEventListener('resize',()=>{
        console.log(window.innerWidth)
        if(window.innerWidth>990){
          document.getElementById('jobSection').style="display:block"
        }
        if(window.innerWidth<=990){
          document.getElementById('jobSection').style="display:none"
          document.getElementById('job-details-hiden').style="display:block"
        }
      })
      document.querySelector('.retourPage').addEventListener('click',()=>{
        console.log('first')
      window.location='http://127.0.0.1:5500/search-employers.html'
      })
      document.querySelector(".skills-job").innerHTML = "SKILLS :";
      document.querySelector(".skills-job").style =
        "color:#5C80B7;margin-right: 12px;";
        arrayJobs.forEach((findjob,cntr) => {
       
        if (findjob.title === job.querySelector(".title-job").innerHTML && indx==cntr) {
          document.querySelector(
            ".jb_types"
          ).innerHTML = `${findjob.offers} poste`;
          document.querySelector("._jb_title a").innerHTML = `${findjob.title}`;
          document.querySelector(
            "._emp_jb"
          ).innerHTML = `location ${findjob.location}`;
          document.querySelector(
            ".description"
          ).innerHTML = `${findjob.description}`;
          document.querySelector(".job-img").src = findjob.src;
          findjob.skills.forEach((skill) => {
            let span = document.createElement("span");
            span.innerHTML = "";
            span.innerHTML = `${skill} , `;
            span.style = "color:#6671B0;margin-left:8px;";
            document.querySelector(".skills-job").appendChild(span);
          });
        }
      });
    });
  });
}

const skill = document.getElementById("search-skills");
skill.addEventListener("input", filtersSkills2);

function filtersSkills2() {
  const searchInput = document.getElementById("search-skills");

  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll("#Skills .item .checkbox-custom");
  const list = document.querySelectorAll("#Skills .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
      console.log(list[i]);
    } else {
      list[i].style.display = "none";
    }
  });
}

//***Experience-input */
const Experience = document.getElementById("input-experience");
Experience.addEventListener("input", filtersSkills4);

function filtersSkills4() {
  const searchInput = document.getElementById("input-experience");
  console.log(searchInput);
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(
    "#Experience .item .checkbox-custom"
  );
  const list = document.querySelectorAll("#Experience .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
      console.log(list[i].querySelector("label").innerHTML);
    } else {
      list[i].style.display = "none";
    }
  });
}

//***jobs-offer */
const jobInput = document.getElementById("jobInput");
jobInput.addEventListener("input", filtersSkills);

function filtersSkills() {
  const searchInput = document.getElementById("jobInput");

  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(
    "#jobsOffers .item .radio-custom"
  );
  const list = document.querySelectorAll("#jobsOffers .item ");

  listItems.forEach((item, i) => {
    let text = item.value;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      list[i].style.display = "";
      const selected = list[i].querySelector("label").innerHTML;
    } else {
      list[i].style.display = "none";
    }
  });
}

const voletFive = document.querySelector('#volet5')
const volettwo = document.querySelector('#volet2')
const voletth = document.querySelector('#volet3')
const voletFr = document.querySelector('#volet4')

voletFive.addEventListener('click',()=>{
  // select all elemnt
  voletFive.classList.remove('col-lg-4')
  voletFr.classList.remove('col-lg-4')
  ConainVolets=document.querySelector('#ConainVolets')
  ConainVolets.classList.remove('col-lg-4')
  ConainVolets.classList.add('row')
  ConainVolets.style='width:50rem;background:black;display:flex;order: 2'
  volettwo.style="color:white;width:4rem;order: 4;"
 
  voletFive.style='background:red;width:100rem;position:first;order: 0;'
  
})