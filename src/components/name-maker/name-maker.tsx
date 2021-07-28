import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'name-maker',
  styleUrl: 'name-maker.css'
})
export class NameMaker {
  @State() firstName: string;
  @State() lastName: string;
  @State() name: string;

  handleSubmit(event) {
    this.name = `Naam: ${this.firstName} ${this.lastName}`
    event.preventDefault();
  }

  handleChangeFirstName(event) {
    this.firstName = event.target.value;
  }

  handleChangeLastName(event) {
    this.lastName = event.target.value;
  }

  render() {
    return (
      <div class="component">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Naam:
          </label>
          <div>
            <input type="text" value={this.firstName} placeholder="Voornaam" onInput={(event) => this.handleChangeFirstName(event)} />
            <input type="text" value={this.lastName} placeholder="Achternaam" onInput={(event) => this.handleChangeLastName(event)} />
          </div>
          <input type="submit" value="Submit" />
        </form>

        <p>{this.name}</p>
      </div>
    );
  }
}
