import { createRoot } from 'react-dom/client';
import SocialNetworkApp from "./App";

test( 'renders without crashing', () => {

   const div1 = document.createElement( 'div' )
   ReactDOM.render( <App />, div1 );
   ReactDOM.unmountComponentAtNode( div1 )

} );