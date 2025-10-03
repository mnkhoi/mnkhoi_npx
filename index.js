import { render } from 'prettyjson'
import { data } from './lib/data.js'

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white',
}

export const pkg = () => render(data, renderOpts) 
