import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConfigManager, ModuleTypeEnum, PluginManager } from '@kailona/core';
import { ThemeProvider, Loader } from '@kailona/ui';
import { ModalProvider } from './context/ModalContext';
import Dashboard from './components/Dashboard';
import MainLayout from './components/MainLayout';
import initFHIRPatients from './lib/initFHIRPatients';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.basename = ConfigManager.appConfig.basename;
        this.state = {
            loading: true,
        };
    }

    componentDidMount = async () => {
        await initFHIRPatients();

        // Register available plugins
        ConfigManager.appConfig.plugins.forEach(plugin => {
            PluginManager.registerPlugin(plugin);
        });

        this.setState({
            loading: false,
        });
    };

    getPluginRoutes = () => {
        const routes = [];

        PluginManager.plugins.forEach((plugin, index) => {
            const { path, modules } = plugin;
            const { Component: DataModule } = modules[ModuleTypeEnum.DataModule];

            routes.push(
                <Route
                    key={index}
                    path={path}
                    render={() => (
                        <MainLayout>
                            <DataModule />
                        </MainLayout>
                    )}
                />
            );
        });

        return routes;
    };

    render() {
        const pluginRoutes = this.getPluginRoutes();

        return (
            <ThemeProvider>
                <ModalProvider>
                    {this.state.loading ? (
                        <Loader />
                    ) : (
                        <Router basename={this.basename}>
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => (
                                        <MainLayout>
                                            <Dashboard />
                                        </MainLayout>
                                    )}
                                />
                                {pluginRoutes}
                            </Switch>
                        </Router>
                    )}
                </ModalProvider>
            </ThemeProvider>
        );
    }
}
