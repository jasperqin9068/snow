import Icon from './icon/Icon'
import Rate from './rate/Rate'

const components = {
	Icon,
	Rate
};

const snow = {
	...components
};


const install = (Vue) => {
	if (install.installed) return false;
	Object.keys(snow).forEach(key => Vue.component(key, snow[key]))
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default install