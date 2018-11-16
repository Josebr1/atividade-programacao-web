/**
 * Design pattern 
 * pt-br: Implementação para bind dos dados na tela sem precisar de atualização usando o padrão
 * proxy.
 */
export class ProxyFactory {

    /**
     * object -> Object Model
     * props -> Array
     * action -> Callback
     * 
     * return {
     *      Callback value
     * }
     * 
     * Por último temos o REST OPERATOR
     */
    static create(object, props, action) {
        return new Proxy(object, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._isFunction(target[prop])) {
                    return function () {
                        console.log(`a propriedade '${prop}' foi interceptado`);
                        let result = Reflect.apply(target[prop], target, arguments); 
                        action(target)
                        return result;
                    }
                }
                return Reflect.get(target, prop, receiver);
            },

            /**
             *  Retorna a propriedade que sofreu alterações
             * @param {*} target 
             * @param {*} prop 
             * @param {*} value 
             * @param {*} receiver 
             */
            set(target, prop, value, receiver) {
                    
                let result = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) action(target);
                return result;
            }
        });
    }

    static _isFunction(func) { return typeof(func) == typeof(Function) }
}