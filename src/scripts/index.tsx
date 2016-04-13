import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Autocomplete} from '../autocomplete/index';

import Input from 'Components/Input';

ReactDOM.render(
    <Autocomplete
        fetch={search => new Promise<any>((resolve) => resolve([]))}
        valueLink={() => false}
    />,
    document.getElementById('app'));