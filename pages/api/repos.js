import getFirebaseAdmin from '../../utils/firebaseadmin.js';
import { sendStatus, formatData } from '../../utils/apiFormatter';

export default async function user(req, res) {
  if (req.method !== 'GET') return sendStatus(res, 'CannotMETHOD');

  const admin = await getFirebaseAdmin();
  var db = admin.firestore();
  const ref = db.collection('repos');
  const documents = await ref.get();

  var repositories = [];
  documents.forEach(doc => {
    var data = doc.data();
    repositories.push(data.full_name);
  });

  res.status(200).send(formatData(repositories));
}
