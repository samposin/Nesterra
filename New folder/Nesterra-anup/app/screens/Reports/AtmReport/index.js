import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import Overview from '../Overview';
import StateAnalysis from '../StateAnalysis';
import OcrReport from '../OcrReport';
import SiteCertiFication from '../SiteCertiFication';

const AtmReport = () => {
  const {ReportComponent} = useSelector(state => state.ReportComponent);

  const ranDerView = () => {
    switch (true) {
      case ReportComponent === 'overview':
        return <Overview />;

      case ReportComponent === 'site':
        return <SiteCertiFication />;
      case ReportComponent === 'state':
        return <StateAnalysis />;
      case ReportComponent === 'report':
        return <OcrReport />;
    }
  };

  return (
    <View>
      <>{ranDerView()}</>
    </View>
  );
};

export default AtmReport;

const styles = StyleSheet.create({});
