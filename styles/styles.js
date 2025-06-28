import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 140,
    height: 90,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 0,
  },
  noteContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  noteTextWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  noteDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  noteDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
    fontStyle: 'italic',
  },
  deleteButton: {
    color: '#d11a2a',
    fontWeight: '600',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#fddede',
    textAlign: 'center',
  },
});
