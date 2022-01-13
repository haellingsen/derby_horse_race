(function (window, document, undefined) {

  // code that should be taken care of right away

  window.onload = init;

  function init() {
    // the code to be called when the dom has loaded
    // #document has its nodes
    populate_projects()
  }

})(window, document, undefined);


var project_data = [
  {
    name: "project1",
    value: "10"
  },
  {
    name: "project2",
    value: "20"
  },
  {
    name: "project3",
    value: "30"
  },

]



function populate_projects() {

  project_data.forEach(project => {
    const slidecontainer = document.createElement('div')
    slidecontainer.className = 'slidecontainer'
    const slide_input = document.createElement('input')
    slide_input.className = "slider"
    slide_input.setAttribute('type', 'range')
    slide_input.setAttribute('min', '1')
    slide_input.setAttribute('max', '100')
    slide_input.setAttribute('value', project.value)
    slide_input.setAttribute('id', 'slider_'+project.name)
    const project_info = document.createElement('p')
    project_info.innerHTML = project.name+" progress: "
    const project_progress = document.createElement('span')
    project_progress.setAttribute('id', 'slider_'+project.name)
    project_info.appendChild(project_progress)
    slidecontainer.appendChild(slide_input)
    slidecontainer.appendChild(project_info)
    projects.appendChild(slidecontainer)

    // projects.innerHTML += "<div class='slidecontainer'>" +
    // "<input type='range' min='1' max='100' value='" + 
    // project.value + "' class='slider' id='slider_"+ project.name +"'>" +
    // "<p>"+project.name+" progress: <span id='progress_"+project.name+"'></span></p>" + 
    // "</div>"

    project_progress.innerHTML = slide_input.value;

    slide_input.oninput = function () {
      project_progress.innerHTML = this.value;
    }

  });
}
