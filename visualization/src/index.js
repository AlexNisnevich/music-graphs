import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';

import elements from './data';

cytoscape.use(dagre);

const DEFAULT_EDGE_COLOR = '#ccc';
const PREDECESSOR_COLOR = 'blue';
const SUCCESSOR_COLOR = 'green';

const cy = cytoscape({
    container: document.getElementById('cy'), // container to render in
    elements: elements,

    style: [ // the stylesheet for the graph
		{
			selector: 'node',
			style: {
				'background-color': '#FFFDD0',
				'border-color': '#888',
				'border-width': 2,
				'label': 'data(id)',
				'width': 'data(weight)',
				'height': 'data(weight)',
				'font-size': 20,
				'text-margin-y': -10,
				'text-background-color': 'white',
				'text-background-opacity': 0,
				'text-background-padding': 2
			}
		},
		{
			selector: 'node:active',
			style: {
				'label': 'data(fullName)',
				'border-color': 'black',
				'border-width': 4,
				'font-size': 30,
				'font-weight': 'bold',
				'text-background-opacity': 0.6
			}
		},
		{
			selector: 'node.predecessor',
			style: {
				'border-color': PREDECESSOR_COLOR,
				'background-color': PREDECESSOR_COLOR,
				'border-width': 4,
				'font-size': 25,
				'text-background-opacity': 0.6
			}
		},
		{
			selector: 'node.successor',
			style: {
				'border-color': SUCCESSOR_COLOR,
				'background-color': SUCCESSOR_COLOR,
				'border-width': 4,
				'font-size': 25,
				'text-background-opacity': 0.6
			}
		},
		{
			selector: 'edge',
			style: {
				'curve-style': 'bezier',
				'width': 2.5,
				'line-color': DEFAULT_EDGE_COLOR,
				'target-arrow-color': DEFAULT_EDGE_COLOR,
				'target-arrow-shape': 'triangle',
				'arrow-scale': 1.5
			}
		},
		{
			selector: 'edge.predecessor',
			style: {
				'width': 3,
				'line-color': PREDECESSOR_COLOR,
				'target-arrow-color': PREDECESSOR_COLOR,
				'z-index': 10000
			}
		},
		{
			selector: 'edge.successor',
			style: {
				'width': 3,
				'line-color': SUCCESSOR_COLOR,
				'target-arrow-color': SUCCESSOR_COLOR,
				'z-index': 10000
			}
		},
		{
			selector: 'edge.direct',
			style: {
				'width': 7
			}
		}
    ],

	layout: {
		name: 'dagre',
		fit: true,
		spacingFactor: 1,
		rankSep: 100
	}
});

window.cy = cy; // (for debugging)

cy.$('node').on('grab', function (e) {
	e.target.connectedEdges().addClass('direct');
	e.target.predecessors().addClass('predecessor');
	e.target.successors().addClass('successor');
});

cy.$('node').on('free', function (e) {
	e.target.connectedEdges().removeClass('direct');
	e.target.predecessors().removeClass('predecessor');
	e.target.successors().removeClass('successor');
});

cy.$('node[id = "J. Hummel"]').shift('x', -100); // Move Hummel to the left to give our boy Beethoven some room.
