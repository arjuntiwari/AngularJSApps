import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable()
export class LocalStorage {
    public data: any = []
    constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
    public storeOnLocalStorage(key, val): void {

        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);

    }
    public getFromLocal(key): string {
        console.log('recieved= key:' + key);
        return this.data[key] = this.storage.get(key);

    }

}
