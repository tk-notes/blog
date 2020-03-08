const log = () => console.log('clicked');
button.addEventListener('click', log);

const buildEventListener = (event) => (element, handler) => element.addEventListener(event, handler);

const onClick = buildEventListener('click');
const onHover = buildEventListener('hover');

onClick(button, log);
onHover(link, log);
