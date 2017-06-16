class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            sum: 0,
            max: null,
            min: null,
            mode: null,
            modeTracker: []
        }

        this.insert = this.insert.bind(this);
    }
    insert(val) {
        this.setState((prevState) => {
            let { sum, max, min, mean, count, modeTracker, mode } = prevState;

            sum += val;
            count += 1;

            max = (max === null || val > max) ? val : max;
            min = (min === null || val < min) ? val : min;

            modeTracker[val] = (modeTracker[val] === undefined) ? 1 : modeTracker[val] + 1;
            mode = (mode === null || modeTracker[val] > modeTracker[mode]) ? val : mode;
            return {
                sum, max, min, mode, modeTracker, count
            }
        })

    }
    render() {
        const { sum, count, mode, min, max } = this.state;

        return (
            <div className="row">
                <div className="columns small-10 medium-6 large-4 small-centered medium-centered large-centered">
                    <h1>Number Cruncher</h1>
                </div>
                <NumberForm onSubmit={this.insert} />
                <div className="columns small-10 medium-6 large-4 small-centered medium-centered large-centered">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="100">Max</th>
                                <th width="100">Min</th>
                                <th width="100">Mean</th>
                                <th width="100">Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{max}</td>
                                <td>{min}</td>
                                <td>{(count === 0) ? null : (sum / count).toFixed(1)}</td>
                                <td>{mode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

class NumberForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    isInvalid(value) {
        return (isNaN(value) || value <= 0 || value >= 100)
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const value = this.state;

        event.preventDefault();
        this.props.onSubmit(Number(this.state.value));
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="columns small-10 medium-6 large-4 small-centered medium-centered large-centered">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New Number (must be integer between 0 and 100):
                        <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button disabled={this.isInvalid(this.state.value)} onClick={this.handleSubmit}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));