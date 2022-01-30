// import * as template from "./template.js"
// import getSessions,{sessionTemplate} from './sessionRepository.js'
import getSessions, * as sessionRepository from './sessionRepository.js'


function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    // list.innerHTML = template.sessionTemplate(data.listItems);
    // list.innerHTML = sessionTemplate(data.listItems);
    list.innerHTML = sessionRepository.sessionTemplate(data.listItems);

};


var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });
