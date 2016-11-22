import React from 'react';
import _ from 'lodash';

export class CustomersAddressesPage extends React.Component {
    constructor(props) {
        super(props);
        let collapse = [];
        if (this.props.location.query.collapse) {
            try {
                collapse = this.props.location.query.collapse.split(',');
            } catch (err) {
            }
        }
        this.state = { collapse };

        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(event) {
        event.preventDefault();
        const id = event.target.parentElement.id;
        let collapse = this.state.collapse.slice(0);

        if (collapse.indexOf(id) < 0) {
            collapse.push(id);
        } else {
            _.pull(collapse, id);
        }

        let location = Object.assign({}, this.props.location);
        if (collapse.length) {
            location.query.collapse = collapse.join(',');
        } else {
            delete location.query.collapse;
        }

        this.props.router.replace(location);
        this.setState({ collapse });
    }

    isCollapsed(id) {
        return this.state.collapse.indexOf(id) >= 0;
    }

    render() {
        return (
            <div>
                <div className="panel panel-default" id="shipping">
                    <div className="panel-heading" onClick={this._handleClick}>
                        Shipping
                        <i className={`glyphicon ${this.isCollapsed('shipping') ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-up'} pull-right`}></i>
                    </div>
                    <div className={`panel-body collapse ${this.isCollapsed('shipping') ? '' : 'in'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce magna dui, accumsan sed dolor eu,
                        congue mollis augue. Praesent convallis sem non ligula egestas porta. Vestibulum quis aliquam
                        orci. Aenean facilisis ac felis quis pharetra. Sed aliquet elit condimentum libero sodales
                        pretium. In sed elit pharetra, tempor mi ac, sollicitudin libero. Maecenas sit amet dui
                        dignissim, faucibus magna dignissim, faucibus tortor. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Curabitur lacinia turpis eu eros ullamcorper pharetra. Proin quam mauris,
                        faucibus id purus id, gravida porttitor dolor. Pellentesque dapibus urna id justo ultrices
                        ornare. Phasellus tincidunt erat nec purus viverra mollis. Phasellus suscipit mi eget purus
                        tincidunt, nec rutrum mauris elementum. Duis erat sem, gravida vitae sapien non, maximus auctor
                        libero. Sed faucibus interdum tellus, vel luctus quam. Nullam at pulvinar risus.
                    </div>
                </div>
                <div className="panel panel-default" id="billing">
                    <div className="panel-heading" onClick={this._handleClick}>
                        Billing
                        <i className={`glyphicon ${this.isCollapsed('billing') ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-up'} pull-right`}></i>
                    </div>
                    <div className={`panel-body collapse ${this.isCollapsed('billing') ? '' : 'in'}`}>
                        Proin at mauris viverra, pellentesque mi a, placerat dui. Aenean sit amet gravida dolor. Donec
                        tempus lectus eu lorem sodales, a volutpat est ullamcorper. Integer rhoncus ligula elit. Aenean
                        faucibus non libero ut convallis. Aenean euismod odio tempor dui faucibus fermentum. Vestibulum
                        euismod ante ex, in vehicula ipsum maximus vel. Duis at purus eu sem fringilla finibus. Nam
                        rhoncus velit vitae velit vehicula fermentum.
                    </div>
                </div>
                <div className="panel panel-default" id="home">
                    <div className="panel-heading" onClick={this._handleClick}>
                        Home
                        <i className={`glyphicon ${this.isCollapsed('home') ? 'glyphicon glyphicon-menu-down' : 'glyphicon glyphicon-menu-up'} pull-right`}></i>
                    </div>
                    <div className={`panel-body collapse ${this.isCollapsed('home') ? '' : 'in'}`}>
                        Sed placerat erat vestibulum mi suscipit consectetur. Nulla ut varius lectus. Suspendisse mollis
                        mi in luctus pretium. In non rutrum tellus, id ultrices neque. Aenean facilisis nisl eu nisl
                        convallis placerat. Maecenas dictum scelerisque neque quis interdum. Sed imperdiet eget ipsum
                        sit amet semper. Etiam vel lectus lectus.
                    </div>
                </div>
            </div>
        );
    }
}
