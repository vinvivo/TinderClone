// Purpose is to render a list of books.
import React, { Component } from 'react';

export default class BookList extends Componen {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    };
}