(function(window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes
        populate_projects()
    }

})(window, document, undefined);


var project_data = [{
        name: "project1",
        value: "0",
        actions: [{
                name: "action1",
                status: false
            },
            {
                name: "action2",
                status: false
            },
            {
                name: "action3",
                status: false
            },
        ]
    },
    {
        name: "project2",
        value: "0",
        actions: [{
                name: "action1",
                status: false
            },
            {
                name: "action2",
                status: false
            },
            {
                name: "action3",
                status: false
            },
        ]

    },
    {
        name: "project3",
        value: "0",
        actions: [{
                name: "action1",
                status: false
            },
            {
                name: "action2",
                status: false
            },
            {
                name: "action3",
                status: false
            },
        ]
    },

]



function populate_projects() {

    project_data.forEach(project => {
        const slidecontainer = document.createElement('div')
        slidecontainer.className = 'slidecontainer'
        const slide_input = document.createElement('input')
        slide_input.className = "slider"
        slide_input.setAttribute('type', 'range')
        slide_input.setAttribute('min', '0')
        slide_input.setAttribute('max', '100')
        slide_input.setAttribute('value', project.value)
        slide_input.setAttribute('id', 'slider_' + project.name)
        const project_info = document.createElement('div')
        project_info.className = 'projectinfo'
        project_info.innerHTML = project.name + " progress: "
        const project_progress = document.createElement('span')
        project_progress.setAttribute('id', 'project_progress_' + project.name)
        project_info.appendChild(project_progress)
        slidecontainer.appendChild(project_info)
        slidecontainer.appendChild(slide_input)
        projects.appendChild(slidecontainer)
        project_progress.innerHTML = slide_input.value;

        slide_input.oninput = function() {
            project_progress.innerHTML = this.value;
            project.value = this.value;
        }

        slide_input.onchange = function() {
            project_progress.innerHTML = this.value;
            project.value = this.value;
        }

        const actioncontainer = document.createElement("div")
        const actionlist = document.createElement("ul")
        actionlist.className = 'actionlist'
        const actiontitle = document.createElement("span")
        actiontitle.innerHTML = "Project actions: " + project.actions.length
        actiontitle.setAttribute('id', "actiontitle")
        actioncontainer.appendChild(actiontitle)
        actioncontainer.appendChild(actionlist)
        project.actions.forEach(action => {
            const actionitem = document.createElement("li")
            const actionname = document.createElement("span")
            actionname.className = "actionname"
            const actionstatus = document.createElement("span")
            actionitem.appendChild(actionname)
            actionitem.appendChild(actionstatus)
            actionname.innerHTML = action.name
            actionstatus.innerHTML = action.status ? "Done" : "Not done"
            actionlist.appendChild(actionitem)

            actionstatus.onclick = function() {
                action.status = !action.status
                actionstatus.innerHTML = action.status ? "Done" : "Not done"
                update_progress()
            }
        })

        actiontitle.onclick = function() {
            actionlist.style.display = actionlist.style.display === 'block' ? 'none' : 'block'
        };
        project_info.appendChild(actioncontainer)

    });

    function update_progress() {
        project_data.forEach(project => {
            let completed_actions = 0
            project.actions.forEach(action => {
                completed_actions += action.status ? 1 : 0;
            })
            project.value = (completed_actions / project.actions.length) * 100.0
            const slider = document.getElementById("slider_" + project.name)
            slider.value = project.value
            actiontitle = document.getElementById("actiontitle")
            actiontitle.innerHTML = "Project actions: " + project.actions.length
        })
    }

}