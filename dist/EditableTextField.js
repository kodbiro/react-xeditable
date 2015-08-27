'use strict';

var React = require('react');

var Button = require('react-bootstrap').Button;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Input = require('react-bootstrap').Input;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

var EditableTextField = React.createClass({
    displayName: 'EditableTextField',

    save: function save() {
        this.props.onUpdate(this.props.name, this.refs.input.getValue());
        this.refs.overlay.hide();
    },

    cancel: function cancel() {
        this.refs.overlay.hide();
    },

    submit: function submit(event) {
        event.preventDefault();
        this.save();
    },

    render: function render() {
        var empty = this.props.value === "";
        var linkText = empty ? 'Empty' : this.props.value;
        var linkClass = empty ? 'editable-click editable-empty' : 'editable-click';
        var popover = React.createElement(
            Popover,
            null,
            React.createElement(
                'form',
                { className: 'form-inline', onSubmit: this.submit },
                React.createElement(
                    Input,
                    { type: 'text', ref: 'input', placeholder: 'Empty', className: 'input-sm', defaultValue: this.props.value },
                    React.createElement(
                        ButtonToolbar,
                        { className: 'editable-buttons' },
                        React.createElement(
                            Button,
                            { bsStyle: 'primary', className: 'btn-sm', onClick: this.save },
                            React.createElement('i', { className: 'glyphicon glyphicon-ok' })
                        ),
                        React.createElement(
                            Button,
                            { bsStyle: 'default', className: 'btn-sm', onClick: this.cancel },
                            React.createElement('i', { className: 'glyphicon glyphicon-remove' })
                        )
                    )
                )
            )
        );

        return React.createElement(
            OverlayTrigger,
            { ref: 'overlay', trigger: 'click', rootClose: true, placement: 'bottom', overlay: popover },
            React.createElement(
                'a',
                { href: 'javascript:;', className: linkClass },
                linkText
            )
        );
    }
});

module.exports = EditableTextField;