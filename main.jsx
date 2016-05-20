import { render } from 'react-dom';
import { renderRoutes } from './startup/client/routes.jsx';

render(renderRoutes(), document.getElementById('app'));
