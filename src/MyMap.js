import React from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl';

const MyMap = React.createClass({
  getInitialState() {
    return {
      mapCenter: [0, 0],
      zoom: 2,
      style: 'mapbox://styles/mapbox/light-v9',
    };
  },

  render() {
    const { state, props } = this;

    return (
      <div className="MyMap" style={{width: 500, height: 700}}>
          <ReactMapboxGl
            center={state.mapCenter}
            zoom={[state.zoom]}
            style={state.style}
            accessToken="pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A"
          >
            <ZoomControl
              zoomDiff={1}
              onControlClick={this._onControlClick}
            />
          </ReactMapboxGl>
      </div>
    );
  },

  _onControlClick(map, zoomDiff) {
    const zoom = map.getZoom() + zoomDiff;
    this.setState(() => ({ zoom: zoom }));
  }
});

export default MyMap;