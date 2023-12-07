const heading = React.createElement('h1', { id: 'heading' }, "Hello World from React");

// root.render(heading)

/* 
<div id='parent'>
    <div id='child1'>
        <h1>Head</h1>
        <h2>Head 2</h2>
    <div>
    <div id='child2'>
        <h1>Head</h1>
        <h2>Head 2</h2>
    <div>
</div>
*/

const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'Head1'), React.createElement('h2', {}, 'Head2')]))

const secondParent = React.createElement('div', {id: 'parentDiv'}, [
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, 'heading 1'),
        React.createElement('h2', {}, 'heading 2')
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'Heading 1'),
        React.createElement('h2', {}, 'Heading 2')
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(secondParent)