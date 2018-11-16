export class TaskView extends View {
    constructor(element) {
        super(element);

        elemento.addEventListener('click', function(event) {
            if(event.target.nodeName == 'TH') 
                currentInstance().ordena(event.target.textContent.toLowerCase());
        });
    }
}