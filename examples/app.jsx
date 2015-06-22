'use strict';

var React = require('react');

document.addEventListener('DOMContentLoaded', function () {
    var XEditable = require('../index.js');

    var App = React.createClass({
        getInitialState : function () {
            return {
                project : {
                    name : 'React X-editable',
                    description : 'X-editable for React'
                }
            }
        },
        valueUpdated : function (name, value) {
            var state = this.state;
            state.project[name] = value;
            this.setState(state);
        },
        render : function () {
            return (
                <div>
                <p>Project name: <XEditable.EditableTextField value={this.state.project.name} onUpdate={this.valueUpdated} name='name'/></p>
                <p>Project description: <XEditable.EditableTextField value={this.state.project.description} onUpdate={this.valueUpdated} name='description'/></p>
                </div>
            );
        }
    })

    React.render(<App/>, document.getElementById('content'));
});

