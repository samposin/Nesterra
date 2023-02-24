import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import SiteActionStatus from './Components/SiteActionStatus';

const SiteCertiFication = () => {
  return (
    <>
      <SiteActionStatus HeaderText="Site Certification Status" />
      <SiteActionStatus HeaderText="Site Actions Status" />
    </>
  );
};

export default SiteCertiFication;

const styles = StyleSheet.create({});
