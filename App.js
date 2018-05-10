/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Share from 'react-native-share';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={async () => {
            try {
              const shareOptions = {
                title: "React Native",
                type: 'application/pdf',
                url: `data:application/pdf;base64,${PDF_BASE64}`,
                showAppsToView: true,
              }

              if(Platform.OS == 'android') {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                  {
                    title: 'Permission Writte',
                    message: 'The App need permission to Writter'
                  }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED
                  || granted === true) {
                     setTimeout(() => {Share.open(shareOptions);}, 200);
                } else {
                  Alert.alert('Permission Denied', 'Not possible continue');
                }
              } else {
                 setTimeout(() => {Share.open(shareOptions);}, 200);
              }
            } catch (err) {
              console.warn(err)
            }
          }}
        >
          <Text style={styles.welcome}>
            Tap in here to open base64 in anoter app
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const PDF_BASE64 = `JVBERi0xLjQKMSAwIG9iago8PAovVGl0bGUgKP7/KQovQ3JlYXRvciAo/v8pCi9Qcm9k
dWNlciAo/v8AUQB0ACAANQAuADUALgAxKQovQ3JlYXRpb25EYXRlIChEOjIwMTgwNTA5
MTUxMTIwKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMg
MyAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0V4dEdTdGF0ZQovU0EgdHJ1
ZQovU00gMC4wMgovY2EgMS4wCi9DQSAxLjAKL0FJUyBmYWxzZQovU01hc2sgL05vbmU+
PgplbmRvYmoKNSAwIG9iagpbL1BhdHRlcm4gL0RldmljZVJHQl0KZW5kb2JqCjYgMCBv
YmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAzIDAgUgovQ29udGVudHMgOCAwIFIKL1Jl
c291cmNlcyAxMCAwIFIKL0Fubm90cyAxMSAwIFIKL01lZGlhQm94IFswIDAgNTk1IDg0
Ml0KPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9Db2xvclNwYWNlIDw8Ci9QQ1NwIDUgMCBS
Ci9DU3AgL0RldmljZVJHQgovQ1NwZyAvRGV2aWNlR3JheQo+PgovRXh0R1N0YXRlIDw8
Ci9HU2EgNCAwIFIKPj4KL1BhdHRlcm4gPDwKPj4KL0ZvbnQgPDwKL0Y3IDcgMCBSCj4+
Ci9YT2JqZWN0IDw8Cj4+Cj4+CmVuZG9iagoxMSAwIG9iagpbIF0KZW5kb2JqCjggMCBv
YmoKPDwKL0xlbmd0aCA5IDAgUgovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0K
eJy1kl9LwzAUxd/vpzjPwtYkbZYMxh4sKggKpQEfxAfp2GTYYdnDvv5u/piiYhFhKe1J
f70nJzS3uGtfsTuiqNsPdEnrliQEXzMJbWCsRtfTgIEaavjpdSAx1yKNUPz9nS2fq0Zw
7A5UxDyKpK0fOekEhXu+H5js8fzCsklJvqinyvrtvAc1yvJMZPX8jZ6ucLj4lrJ1Lss0
fp1/WfgP9T5W5NgcOfw79NpRcWugBNwW+TS9uJ6TZmUFt8GK/4xcw+1JVv5TJCoSOZIy
ED0BquhRI9GBLEawiCXLKZMJxE4E2R+eZSA3zvdM6s8L9yYaOgOqxa/VZW5kc3RyZWFt
CmVuZG9iago5IDAgb2JqCjI0NgplbmRvYmoKMTIgMCBvYmoKPDwgL1R5cGUgL0ZvbnRE
ZXNjcmlwdG9yCi9Gb250TmFtZSAvUU1BQUFBK0FyaWFsQm9sZAovRmxhZ3MgNCAKL0Zv
bnRCQm94IFstNTYyLjAxMTcxOCAtMzM2LjkxNDA2MiAxNzkwLjAzOTA2IDkxMC42NDQ1
MzEgXQovSXRhbGljQW5nbGUgMCAKL0FzY2VudCA2NTEuMzY3MTg3IAovRGVzY2VudCAt
MTg4LjQ3NjU2MiAKL0NhcEhlaWdodCAwIAovU3RlbVYgOTMuNzUwMDAwMCAKL0ZvbnRG
aWxlMiAxMyAwIFIKPj4gZW5kb2JqCjEzIDAgb2JqCjw8Ci9MZW5ndGgxIDQ2OTIgCi9M
ZW5ndGggMTYgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nKVVa2wU
1xU+d2fGM2vMwxiM3TTlrg3GPPzABpt3/IbUJgZ7TaEJLePdWe+E3Znt7KzBaRtogkIS
mlYpCW0dh7RVWhLUKiKVSoVIQx9KfkZV+FFVQUraH5CkL1HRVmCve+6du+tZMEhVd7X3
fvecc8/5znfvzAIBAA2OggTQP9jQVLr/S6+g5Zv4OzCSGIv9/OFftyD+C0Dge3FDj8ZO
f34CQDqGtpY4GuZ+pWwPri/ielk86R5e/Y7M1h/iujZhR3RpQtoAIGu4Lk/qh1MwF5bj
muKaWnrS+PH180dx3QYwrxQk6XLgIiigKeNKMwC5z5ul30MssFBTAnNUOcA+8oewavoS
HO7ELEH8QXhnJwX8Tk8q72d3k2Z1G3mzDcj09DTmrlEusGogQ4A1q+AXu1UBQqWh0uU4
EHRNUunSZJsCt4DKl7A0nMLIVbhzDkBzaSj/PUVqA12kNvuHqYvKham3A+03ewLfmDqC
8kD79FW5Rt4GlVCFCZQitahaXlGzfkFrS2vTknIpVL6kvLWptaWsZkVNdZVatCRwk1S0
pjNvZD85Zj77zOW/PvO0MtUmtbcNd9TVrZC2bB16ZMvWABloeKl/N/nF81eIduoFMnE6
+6uvd28ny5aRxFj7A51dDuN6EoefIlfJ43qSVCoXbvYwTgPT1+Rx5FQG1QBl65BKSzOS
WczIVa1AJssXLSlvRlatgtVAd9fRxyf+8dI4GX/50+8ce6qrm9DeXivZ9yAhD/Ylrd7e
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
agoxNCAwIG9iago8PCAvVHlwZSAvRm9udAovU3VidHlwZSAvQ0lERm9udFR5cGUyCi9C
YXNlRm9udCAvQXJpYWxCb2xkCi9DSURTeXN0ZW1JbmZvIDw8IC9SZWdpc3RyeSAoQWRv
YmUpIC9PcmRlcmluZyAoSWRlbnRpdHkpIC9TdXBwbGVtZW50IDAgPj4KL0ZvbnREZXNj
cmlwdG9yIDEyIDAgUgovQ0lEVG9HSURNYXAgL0lkZW50aXR5Ci9XIFswIFs3NDQgNzE2
IDU1MiAyNzYgNjA2IDI3NiA5MzYgMzg2IDYwNiAzMzAgXQpdCj4+CmVuZG9iagoxNSAw
IG9iago8PCAvTGVuZ3RoIDQyNyA+PgpzdHJlYW0KL0NJREluaXQgL1Byb2NTZXQgZmlu
ZHJlc291cmNlIGJlZ2luCjEyIGRpY3QgYmVnaW4KYmVnaW5jbWFwCi9DSURTeXN0ZW1J
bmZvIDw8IC9SZWdpc3RyeSAoQWRvYmUpIC9PcmRlcmluZyAoVUNTKSAvU3VwcGxlbWVu
dCAwID4+IGRlZgovQ01hcE5hbWUgL0Fkb2JlLUlkZW50aXR5LVVDUyBkZWYKL0NNYXBU
eXBlIDIgZGVmCjEgYmVnaW5jb2Rlc3BhY2VyYW5nZQo8MDAwMD4gPEZGRkY+CmVuZGNv
ZGVzcGFjZXJhbmdlCjIgYmVnaW5iZnJhbmdlCjwwMDAwPiA8MDAwMD4gPDAwMDA+Cjww
MDAxPiA8MDAwOT4gWzwwMDQ4PiA8MDA2NT4gPDAwNkM+IDwwMDZGPiA8MDAyMD4gPDAw
NTc+IDwwMDcyPiA8MDA2ND4gPDAwMjE+IF0KZW5kYmZyYW5nZQplbmRjbWFwCkNNYXBO
YW1lIGN1cnJlbnRkaWN0IC9DTWFwIGRlZmluZXJlc291cmNlIHBvcAplbmQKZW5kCmVu
ZHN0cmVhbQplbmRvYmoKNyAwIG9iago8PCAvVHlwZSAvRm9udAovU3VidHlwZSAvVHlw
ZTAKL0Jhc2VGb250IC9BcmlhbEJvbGQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNj
ZW5kYW50Rm9udHMgWzE0IDAgUl0KL1RvVW5pY29kZSAxNSAwIFI+PgplbmRvYmoKMyAw
IG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgClsKNiAwIFIKXQovQ291bnQgMQovUHJv
Y1NldCBbL1BERiAvVGV4dCAvSW1hZ2VCIC9JbWFnZUNdCj4+CmVuZG9iagp4cmVmCjAg
MTcKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAx
MjAgMDAwMDAgbiAKMDAwMDAwNDUzNiAwMDAwMCBuIAowMDAwMDAwMTY5IDAwMDAwIG4g
CjAwMDAwMDAyNjQgMDAwMDAgbiAKMDAwMDAwMDMwMSAwMDAwMCBuIAowMDAwMDA0NDAx
IDAwMDAwIG4gCjAwMDAwMDA2MDcgMDAwMDAgbiAKMDAwMDAwMDkyNiAwMDAwMCBuIAow
MDAwMDAwNDIxIDAwMDAwIG4gCjAwMDAwMDA1ODcgMDAwMDAgbiAKMDAwMDAwMDk0NSAw
MDAwMCBuIAowMDAwMDAxMTk1IDAwMDAwIG4gCjAwMDAwMDM2NzQgMDAwMDAgbiAKMDAw
MDAwMzkyMyAwMDAwMCBuIAowMDAwMDAzNjUzIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1Np
emUgMTcKL0luZm8gMSAwIFIKL1Jvb3QgMiAwIFIKPj4Kc3RhcnR4cmVmCjQ2MzQKJSVF
T0YK`.trim();
