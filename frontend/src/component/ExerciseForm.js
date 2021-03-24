import React, { Component } from 'react'
export default class ExerciseForm extends Component {

    render() {
        const { onChange, form, onSubmit } = this.props 
        return(
            <div className="container">
                <form
                    onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="title"
                        name="title"
                        onChange={onChange}
                        value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description"
                        name="description"
                        onChange={onChange}
                        value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        placeholder="img"
                        name="img"
                        onChange={onChange}
                        value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input 
                            type="Color"
                            className="form-control"
                            placeholder="leftColor Hex"
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input 
                            type="Color"
                            className="form-control"
                            placeholder="rightColor Hex"
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
                            />
                        </div>
                    </div>
                    <button 
                    type="submit"
                    className="btn btn-primary"

                    >
                    Send
                    </button>
                </form>
            </div>
        )
    }
}