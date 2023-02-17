import icons from './icons';
import images from './images';
import theme, {COLORS, SIZES, FONTS} from './theme';

export {icons, images, theme, COLORS, SIZES, FONTS};
// import React, {useRef} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   Animated,
//   Platform,
// } from 'react-native';
// import {VictoryPie} from 'victory-native';

// import {Svg} from 'react-native-svg';

// import {COLORS, FONTS, SIZES, icons, images} from './constants';
// import {useSelector} from 'react-redux';

// const AssetsAndExpenses = () => {
//   // dummy data
//   const confirmStatus = 'C';
//   const pendingStatus = 'P';
//   const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
//   console.log(SiteAnlysis.inv_circuit_count, 'SiteAnlysis');

//   let categoriesData = [
//     {
//       id: 1,
//       name: 'Education',
//       icon: icons.education,
//       color: COLORS.yellow,
//       expenses: [
//         {
//           id: 1,
//           title: 'Tuition Fee',
//           description: 'Tuition fee',
//           location: "ByProgrammers' tuition center",
//           total: 100.0,
//           status: pendingStatus,
//         },
//         {
//           id: 2,
//           title: 'Arduino',
//           description: 'Hardward',
//           location: "ByProgrammers' tuition center",
//           total: 30.0,
//           status: pendingStatus,
//         },
//         {
//           id: 3,
//           title: 'Javascript Books',
//           description: 'Javascript books',
//           location: "ByProgrammers' Book Store",
//           total: 20.0,
//           status: confirmStatus,
//         },
//         {
//           id: 4,
//           title: 'PHP Books',
//           description: 'PHP books',
//           location: "ByProgrammers' Book Store",
//           total: 20.0,
//           status: confirmStatus,
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Nutrition',
//       icon: icons.food,
//       color: COLORS.lightBlue,
//       expenses: [
//         {
//           id: 5,
//           title: 'Vitamins',
//           description: 'Vitamin',
//           location: "ByProgrammers' Pharmacy",
//           total: 25.0,
//           status: pendingStatus,
//         },

//         {
//           id: 6,
//           title: 'Protein powder',
//           description: 'Protein',
//           location: "ByProgrammers' Pharmacy",
//           total: 50.0,
//           status: confirmStatus,
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: 'Child',
//       icon: icons.baby_car,
//       color: COLORS.darkgreen,
//       expenses: [
//         {
//           id: 7,
//           title: 'Toys',
//           description: 'toys',
//           location: "ByProgrammers' Toy Store",
//           total: 25.0,
//           status: confirmStatus,
//         },
//         {
//           id: 8,
//           title: 'Baby Car Seat',
//           description: 'Baby Car Seat',
//           location: "ByProgrammers' Baby Care Store",
//           total: 100.0,
//           status: pendingStatus,
//         },
//         {
//           id: 9,
//           title: 'Pampers',
//           description: 'Pampers',
//           location: "ByProgrammers' Supermarket",
//           total: 100.0,
//           status: pendingStatus,
//         },
//         {
//           id: 10,
//           title: 'Baby T-Shirt',
//           description: 'T-Shirt',
//           location: "ByProgrammers' Fashion Store",
//           total: 20.0,
//           status: pendingStatus,
//         },
//       ],
//     },
//     {
//       id: 4,
//       name: 'Beauty & Care',
//       icon: icons.healthcare,
//       color: COLORS.peach,
//       expenses: [
//         {
//           id: 11,
//           title: 'Skin Care product',
//           description: 'skin care',
//           location: "ByProgrammers' Pharmacy",
//           total: 10.0,
//           status: pendingStatus,
//         },
//         {
//           id: 12,
//           title: 'Lotion',
//           description: 'Lotion',
//           location: "ByProgrammers' Pharmacy",
//           total: 50.0,
//           status: confirmStatus,
//         },
//         {
//           id: 13,
//           title: 'Face Mask',
//           description: 'Face Mask',
//           location: "ByProgrammers' Pharmacy",
//           total: 50.0,
//           status: pendingStatus,
//         },
//         {
//           id: 14,
//           title: 'Sunscreen cream',
//           description: 'Sunscreen cream',
//           location: "ByProgrammers' Pharmacy",
//           total: 50.0,
//           status: pendingStatus,
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: 'Sports',
//       icon: icons.sports_icon,
//       color: COLORS.purple,
//       expenses: [
//         {
//           id: 15,
//           title: 'Gym Membership',
//           description: 'Monthly Fee',
//           location: "ByProgrammers' Gym",
//           total: 45.0,
//           status: pendingStatus,
//         },
//         {
//           id: 16,
//           title: 'Gloves',
//           description: 'Gym Equipment',
//           location: "ByProgrammers' Gym",
//           total: 15.0,
//           status: confirmStatus,
//         },
//       ],
//     },
//     {
//       id: 6,
//       name: 'Clothing',
//       icon: icons.cloth_icon,
//       color: COLORS.red,
//       expenses: [
//         {
//           id: 17,
//           title: 'T-Shirt',
//           description: 'Plain Color T-Shirt',
//           location: "ByProgrammers' Mall",
//           total: 20.0,
//           status: pendingStatus,
//         },
//         {
//           id: 18,
//           title: 'Jeans',
//           description: 'Blue Jeans',
//           location: "ByProgrammers' Mall",
//           total: 50.0,
//           status: confirmStatus,
//         },
//       ],
//     },
//   ];

//   const categoryListHeightAnimationValue = useRef(
//     new Animated.Value(115),
//   ).current;

//   const [categories, setCategories] = React.useState(categoriesData);
//   const [viewMode, setViewMode] = React.useState('chart');
//   const [selectedCategory, setSelectedCategory] = React.useState(null);

//   function processCategoryDataToDisplay() {
//     // Filter expenses with "Confirmed" status
//     let chartData = categories.map(item => {
//       let confirmExpenses = item.expenses.filter(a => a.status == 'C');
//       var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

//       return {
//         name: item.name,
//         y: total,
//         expenseCount: confirmExpenses.length,
//         color: item.color,
//         id: item.id,
//       };
//     });

//     // filter out categories with no data/expenses
//     let filterChartData = chartData.filter(a => a.y > 0);

//     // Calculate the total expenses
//     let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

//     // Calculate percentage and repopulate chart data
//     let finalChartData = filterChartData.map(item => {
//       let percentage = ((item.y / totalExpense) * 100).toFixed(0);
//       return {
//         label: `${percentage}%`,
//         y: Number(item.y),
//         expenseCount: item.expenseCount,
//         color: item.color,
//         name: item.name,
//         id: item.id,
//       };
//     });

//     return finalChartData;
//   }

//   function setSelectCategoryByName(name) {
//     let category = categories.filter(a => a.name == name);
//     setSelectedCategory(category[0]);
//   }

//   function renderChart() {
//     let chartData = processCategoryDataToDisplay();
//     let colorScales = chartData.map(item => item.color);
//     let totalExpenseCount = chartData.reduce(
//       (a, b) => a + (b.expenseCount || 0),
//       0,
//     );

//     // console.log('Check Chart');
//     // console.log(chartData);

//     if (Platform.OS == 'ios') {
//       return (
//         <View style={{alignItems: 'center', justifyContent: 'center'}}>
//           <VictoryPie
//             data={chartData}
//             labels={datum => `${datum.y}`}
//             radius={({datum}) =>
//               selectedCategory && selectedCategory.name == datum.name
//                 ? SIZES.width * 0.4
//                 : SIZES.width * 0.4 - 10
//             }
//             innerRadius={70}
//             labelRadius={({innerRadius}) =>
//               (SIZES.width * 0.4 + innerRadius) / 2.5
//             }
//             style={{
//               labels: {fill: 'white'},
//               parent: {
//                 ...styles.shadow,
//               },
//             }}
//             width={SIZES.width * 0.8}
//             height={SIZES.width * 0.8}
//             colorScale={colorScales}
//             events={[
//               {
//                 target: 'data',
//                 eventHandlers: {
//                   onPress: () => {
//                     return [
//                       {
//                         target: 'labels',
//                         mutation: props => {
//                           let categoryName = chartData[props.index].name;
//                           setSelectCategoryByName(categoryName);
//                         },
//                       },
//                     ];
//                   },
//                 },
//               },
//             ]}
//           />

//           <View style={{position: 'absolute', top: '42%', left: '42%'}}>
//             <Text style={{...FONTS.h1, textAlign: 'center'}}>
//               {totalExpenseCount}
//             </Text>
//             <Text style={{...FONTS.body3, textAlign: 'center'}}>Expenses</Text>
//           </View>
//         </View>
//       );
//     } else {
//       // Android workaround by wrapping VictoryPie with SVG
//       return (
//         <View style={{alignItems: 'center', justifyContent: 'center'}}>
//           <Svg
//             width={SIZES.width}
//             height={SIZES.width}
//             style={{width: '100%', height: 'auto'}}>
//             <VictoryPie
//               standalone={false} // Android workaround
//               data={chartData}
//               labels={datum => `${datum.y}`}
//               radius={({datum}) =>
//                 selectedCategory && selectedCategory.name == datum.name
//                   ? SIZES.width * 0.4
//                   : SIZES.width * 0.4 - 10
//               }
//               innerRadius={70}
//               labelRadius={({innerRadius}) =>
//                 (SIZES.width * 0.4 + innerRadius) / 2.5
//               }
//               style={{
//                 labels: {fill: 'white'},
//                 parent: {
//                   ...styles.shadow,
//                 },
//               }}
//               width={SIZES.width}
//               height={SIZES.width}
//               colorScale={colorScales}
//               events={[
//                 {
//                   target: 'data',
//                   eventHandlers: {
//                     onPress: () => {
//                       return [
//                         {
//                           target: 'labels',
//                           mutation: props => {
//                             let categoryName = chartData[props.index].name;
//                             setSelectCategoryByName(categoryName);
//                           },
//                         },
//                       ];
//                     },
//                   },
//                 },
//               ]}
//             />
//           </Svg>
//           <View style={{position: 'absolute', top: '42%', left: '42%'}}>
//             <Text style={{...FONTS.h1, textAlign: 'center'}}>
//               {totalExpenseCount}
//             </Text>
//             <Text style={{...FONTS.body3, textAlign: 'center'}}>Expenses</Text>
//           </View>
//         </View>
//       );
//     }
//   }

//   function renderExpenseSummary() {
//     let data = processCategoryDataToDisplay();

//     const renderItem = ({item}) => (
//       <TouchableOpacity
//         style={{
//           flexDirection: 'row',
//           height: 40,
//           paddingHorizontal: SIZES.radius,
//           borderRadius: 10,
//           backgroundColor:
//             selectedCategory && selectedCategory.name == item.name
//               ? item.color
//               : COLORS.white,
//         }}
//         onPress={() => {
//           let categoryName = item.name;
//           setSelectCategoryByName(categoryName);
//         }}>
//         {/* Name/Category */}
//         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
//           <View
//             style={{
//               width: 20,
//               height: 20,
//               backgroundColor:
//                 selectedCategory && selectedCategory.name == item.name
//                   ? COLORS.white
//                   : item.color,
//               borderRadius: 5,
//             }}
//           />

//           <Text
//             style={{
//               marginLeft: SIZES.base,
//               color:
//                 selectedCategory && selectedCategory.name == item.name
//                   ? COLORS.white
//                   : COLORS.primary,
//               ...FONTS.h3,
//             }}>
//             {item.name}
//           </Text>
//         </View>

//         {/* Expenses */}
//         <View style={{justifyContent: 'center'}}>
//           <Text
//             style={{
//               color:
//                 selectedCategory && selectedCategory.name == item.name
//                   ? COLORS.white
//                   : COLORS.primary,
//               ...FONTS.h3,
//             }}>
//             {item.y} USD - {item.label}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );

//     return (
//       <View style={{padding: SIZES.padding}}>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={item => `${item.id}`}
//         />
//       </View>
//     );
//   }

//   return (
//     <View style={{flex: 1, backgroundColor: COLORS.lightGray2}}>
//       <ScrollView contentContainerStyle={{paddingBottom: 60}}>
//         {viewMode == 'chart' && (
//           <View>
//             {renderChart()}
//             {renderExpenseSummary()}
//           </View>
//         )}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//   },
// });

// export default AssetsAndExpenses;
