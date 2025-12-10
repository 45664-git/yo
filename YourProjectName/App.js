import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const RED_HEIGHT = 100;

export default function App() {
  return (
    <View style={styles.root}>
      {/* Top fixed red section with 8 inline sections */}
      <View style={styles.redTop}>
        <View style={styles.topRow}>
          <View style={styles.topItem}><Text>Section1</Text></View>
          <View style={styles.topItem}><Text>Section2</Text></View>
          <View style={styles.topItem}><Text>Section3</Text></View>
          <View style={styles.topItem}><Text>Section4</Text></View>
          <View style={styles.topItem}><Text>Section5</Text></View>
          <View style={styles.topItem}><Text>Section6</Text></View>
          <View style={styles.topItem}><Text>Section7</Text></View>
          <View style={[styles.topItem, styles.topItemLast]}><Text>Section8</Text></View>
        </View>
      </View>

      {/* Scrollable content positioned between the red sections */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} nestedScrollEnabled>
        <View style={styles.container1}>
          <Text>Place for Introductory Image/Video</Text>
        </View>

        {/* Row: halves (50%) next to container3 (50%) */}
        <View style={styles.row}>
          <View style={[styles.box, styles.half, styles.container2]}>
            <Text>Halfs</Text>
          </View>
          <View style={[styles.box, styles.half, styles.container3]}>
              <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
                <Text>
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “Is not Latin,
                  though it looks like it, and it actually says nothing,” Before & After magazine answered a curious
                  reader, “Its word loosely approximate the frequency with which letters occur in English, which is why at a
                  glance it looks pretty real.” As Cicero would put it, “Um, not so fast.” The placeholder text, beginning
                  with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its
                  youth, centuries ago, it was Latin."But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?""At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </ScrollView>
          </View>
        </View>

        {/* Row: thirds (3 per row) */}
        <View style={styles.row}>
          <View style={[styles.box, styles.third, styles.container4]}>
            <Text>Thirds</Text>
          </View>
          <View style={[styles.box, styles.third, styles.container5]}>
            <Text>Thirds</Text>
          </View>
          <View style={[styles.box, styles.third, styles.container6]}>
            <Text>Thirds</Text>
          </View>
        </View>

        {/* Row: fourths (4 per row) */}
        <View style={styles.row}>
          <View style={[styles.box, styles.fourth, styles.container7]}>
            <Text>Fourths</Text>
          </View>
          <View style={[styles.box, styles.fourth, styles.container8]}>
            <Text>Fourths</Text>
          </View>
          <View style={[styles.box, styles.fourth, styles.container9]}>
            <Text>Fourths</Text>
          </View>
          <View style={[styles.box, styles.fourth, styles.container10]}>
            <Text>Fourths</Text>
          </View>
        </View>

        {/* Row: fifths (5 per row) */}
        <View style={styles.row}>
          <View style={[styles.box, styles.fifth, styles.container11]}>
            <Text>Fifths</Text>
          </View>
          <View style={[styles.box, styles.fifth, styles.container12]}>
            <Text>Fifths</Text>
          </View>
          <View style={[styles.box, styles.fifth, styles.container13]}>
            <Text>Fifths</Text>
          </View>
          <View style={[styles.box, styles.fifth, styles.container14]}>
            <Text>Fifths</Text>
          </View>
          <View style={[styles.box, styles.fifth, styles.container15]}>
            <Text>Fifths</Text>
          </View>
          <View style={[styles.box, styles.fifth, styles.container16]}>
            <Text>Fifths</Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>

      {/* Bottom fixed red section */}
      <View style={styles.redBottom}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  /* fixed red sections */
  redTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'red',
    zIndex: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  topItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.25)',
    paddingVertical: 8,
  },
  topItemLast: {
    borderRightWidth: 0,
  },
  redBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: RED_HEIGHT,
    backgroundColor: 'yellow',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /* the ScrollView is given top/bottom margins equal to the red sections so its content scrolls between them */
  scroll: {
    flex: 1,
    marginTop: RED_HEIGHT,
    marginBottom: RED_HEIGHT,
  },
  // scrollContent: {
  //   paddingBottom: 0,
  // },
  container1: {
    height: 300,
    width: '100%',
    backgroundColor: '#32db1bff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  half: {
    width: '50%',
  },
  third: {
    width: '33.333%',
  },
  fourth: {
    width: '25%',
  },
  fifth: {
    width: '20%',
  },
  container2: {
    height: 420,
    backgroundColor: '#912356ff',
  },
  container3: {
    height: 420,
    backgroundColor: '#6921bbff',
    /* keep default width for this one (it's long text) */
  },
  container4: {
    height: 420,
    backgroundColor: '#60e6d4ff',
    width: '33.333%'
  },
  container5: {
    height: 420,
    backgroundColor: '#fff',
    width: '33.333%'
  },
  container6: {
    height: 420,
    backgroundColor: '#276bd1ff',
    width: '33.333%'
  },
  container7: {
    height: 420,
    backgroundColor: '#b2d41aff',
    width: '25%'
  },
  container8: {
    height: 420,
    backgroundColor: '#e2c12dff',
    width: '25%'
  },
  container9: {
    height: 420,
    backgroundColor: '#ee7716ff',
    width: '25%'
  },
  container10: {
    height: 420,
    backgroundColor: '#30ec78ff',
    width: '25%'
  },
  container11: {
    height: 420,
    backgroundColor: '#be1adfff',
    width: '20%'
  },
  container12: {
    height: 420,
    backgroundColor: 'rgba(43, 31, 211, 1)',
    width: '20%'
  },
  container13: {
    height: 420,
    backgroundColor: '#e94a87ff',
    width: '20%'
  },
  container14: {
    height: 420,
    backgroundColor: '#41cc1f8c',
    width: '20%'
  },
  container15: {
    height: 420,
    backgroundColor: '#053341ff',
    width: '20%'
  },
  container16: {
    height: 420,
    backgroundColor: '#eb6b76ff',
    width: '20%'
  },
  footerText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
