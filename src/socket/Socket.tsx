import React from 'react';
import SocketIO from 'socket.io-client';
import { authService } from '@services/auth.service';
import { connect } from 'react-redux';
import { getGlobalConfig } from '@services/config';
import { warning, debug } from './utils';
import { SocketContext } from './SocketContext';

interface ISocketProps {
  uri?: string;
  children: any;
  loggedIn: boolean;
}

class Socket extends React.Component<ISocketProps> {
  socket;

  constructor(props) {
    super(props);
    this.connect();
  }

  componentDidUpdate(nextProps: any) {
    const { loggedIn } = this.props;
    if (nextProps.loggedIn !== loggedIn) {
      this.connect();
    }
    return true;
  }

  componentWillUnmount() {
    this.socket && this.socket.close();
  }

  connect() {
    const { loggedIn } = this.props;
    const token = loggedIn && authService.getToken();
    if (!process.browser) {
      return;
    }
    const config = getGlobalConfig();
    const { uri = config.NEXT_PUBLIC_SOCKET_ENDPOINT } = this.props;
    const options = {
      transports: ['websocket', 'polling', 'long-polling'],
      query: token ? `token=${token}` : ''
    };

    this.socket && this.socket.close();

    this.socket = SocketIO(uri, this.mergeOptions(options));

    this.socket.status = 'initialized';

    this.socket.on('connect', () => {
      this.socket.status = 'connected';
      debug('connected');
    });

    this.socket.on('disconnect', () => {
      this.socket.status = 'disconnected';
      debug('disconnect');
    });

    this.socket.on('error', (err) => {
      this.socket.status = 'failed';
      warning('error', err);
    });

    this.socket.on('reconnect', (data) => {
      this.socket.status = 'connected';
      debug('reconnect', data);
    });

    this.socket.on('reconnect_attempt', () => {
      debug('reconnect_attempt');
    });

    this.socket.on('reconnecting', () => {
      this.socket.status = 'reconnecting';
      debug('reconnecting');
    });

    this.socket.on('reconnect_failed', (error) => {
      this.socket.status = 'failed';
      warning('reconnect_failed', error);
    });
  }

  mergeOptions(options = {}) {
    const defaultOptions = {
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1 * 1000,
      reconnectionDelayMax: 5 * 1000,
      autoConnect: true,
      transports: ['websocket', 'polling', 'long-polling'],
      rejectUnauthorized: true
    };
    return { ...defaultOptions, ...options };
  }

  render() {
    const { children } = this.props;
    return (
      <SocketContext.Provider value={this.socket}>
        {React.Children.only(children)}
      </SocketContext.Provider>
    );
  }
}

const mapStates = (state: any) => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStates)(Socket);
