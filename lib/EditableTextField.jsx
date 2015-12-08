'use strict';

var React = require('react');

var Button = require('react-bootstrap').Button;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Input = require('react-bootstrap').Input;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;


var EditableTextField = React.createClass({
    save: function() {
        if (this.props.onUpdate) {
          this.props.onUpdate(this.props.name, this.refs.input.getValue());
        };
        this.refs.overlay.hide();
    },

    cancel: function() {
        this.refs.overlay.hide();
    },

    submit: function(event) {
		event.preventDefault();
		this.save();		
    },

    render: function() {
    	var empty = this.props.value === "";
      var id = this.props.id !== "undefined" ? this.props.id : "popover";
    	var linkText = empty ? 'Empty' : this.props.value;
    	var linkClass = empty ? 'editable-click editable-empty' : 'editable-click';
        var popover = 
            <Popover id={id}>
                <form className='form-inline' onSubmit={this.submit}>
                <Input type='text' ref='input' placeholder='Empty' className='input-sm' defaultValue={this.props.value} />
                <ButtonToolbar className='editable-buttons'>
                <Button bsStyle='primary' className='btn-sm' onClick={this.save}><i className='glyphicon glyphicon-ok'></i></Button>
                <Button bsStyle='default' className='btn-sm' onClick={this.cancel}><i className='glyphicon glyphicon-remove'></i></Button>
                </ButtonToolbar>
                </form>
            </Popover>;

        return (
            <OverlayTrigger ref='overlay' trigger='click' rootClose={true} placement='bottom' overlay={popover}>
                <a href='javascript:;' className={linkClass}>{linkText}</a>
            </OverlayTrigger>
        );
    }
});

module.exports = EditableTextField;
