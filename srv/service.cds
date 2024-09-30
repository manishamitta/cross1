using { db } from '../db/schema';

service MyService {

    entity class as projection on db.class;

}
