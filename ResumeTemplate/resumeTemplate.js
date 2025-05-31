"use strict";

window.addEventListener("DOMContentLoaded", () => {
  debugger;
  const data = JSON.parse(localStorage.getItem("resumeData"));
  if (!data) return;

  populateHeader(data.header);
  populateSummary(data.summary);
  populateList(
    data.certifications,
    "certifications-list",
    createCertificationItem
  );
  populateList(data.projects, "projects-list", createProjectItem);
  populateList(data.experience, "experience-list", createExperienceItem);
  populateSkills(data.lang);
  populateList(data.education, "education-list", createEducationItem);

  console.log(data.skills);

  document.getElementById("download").addEventListener("click", () => {
    const element = document.getElementById("resume");

    setTimeout(() => {
      html2pdf()
        .set({
          margin: [0.5, 0, 0.5, 0],
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
          jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    }, 500);
  });
});

function populateHeader(header) {
  document.getElementById(
    "full-name"
  ).textContent = `${header.firstName} ${header.lastName}`;
  document.getElementById("role-title").textContent = header.role;
  document.getElementById("email").textContent = `Email: ${header.email || ""}`;
  document.getElementById("phone").textContent = `Phone: ${header.phone || ""}`;
  document.getElementById("linkedin").textContent = `LinkedIn: ${
    header.linkedin || ""
  }`;
  document.getElementById("location").textContent = `Location: ${
    header.location || ""
  }`;
}

function populateSummary(summary) {
  document.getElementById("summary-text").textContent = summary || "";
}

function populateList(items, listId, itemRenderer) {
  if (!Array.isArray(items)) return;
  const container = document.getElementById(listId);
  items.forEach((item) => container.appendChild(itemRenderer(item)));
}

function createCertificationItem(cert) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <p id="certifications_name">${cert.cert_name}<span> - ${cert.inst_name}</span></p>
    <p>${cert.key_point}</p>
  `;
  return wrapper;
}

function createProjectItem(project) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <p id="projectName">${project.project_name}</p>
    <p><strong>Role:</strong> ${project.project_role}</p>
    <p><strong>Technologies:</strong> ${project.project_tech}</p>
    <span>${project.project_desc}</span>
    <hr />
  `;
  return wrapper;
}

function createExperienceItem(exp) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <p id="companyName">${exp.company_name}</p>
    <p><strong>${exp.duration}</strong></p>
    <p>${exp.job_title}</p>
    <span>${exp.responsibilities}</span>
    <hr />
  `;
  return wrapper;
}

function createEducationItem(edu) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
    <p id="education_type">${edu.education_type_label}</p>
    <p id="groupName">${edu.institute}</p>
    <span>${edu.education_group_label}</span>
    <p>Year: ${edu.edu_year}</p>
  `;
  return wrapper;
}

function populateSkills(langs) {
  const skillsList = document.getElementById("skills-list");
  langs.forEach((lang) => {
    const li = document.createElement("li");
    li.textContent = lang;
    skillsList.appendChild(li);
  });
}
