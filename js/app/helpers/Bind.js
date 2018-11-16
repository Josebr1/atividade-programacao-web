export class Bind {

    /**
     * Existe um retorno de um objeto de outra classe
     * 
     * @param {*} model 
     * @param {*} view 
     * @param {*} props 
     */
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model));
        
        view.update(model);
        return proxy;
    }

}