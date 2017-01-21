
import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class TenantsApi {
    protected basePath = 'https://localhost:8080/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

	/**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * Create Tenant
     *
     * @param tenant tenant
     */
    public createUsingPOST(tenant: models.Tenant, extraHttpRequestParams?: any): Observable<models.Tenant> {
        return this.createUsingPOSTWithHttpInfo(tenant, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Generate Calendar of availability
     *
     * @param tenantId tenantId
     * @param year year
     * @param daysClosed daysClosed
     */
    public generateCalendarUsingPOST(tenantId: number, year: number, daysClosed: Array<string>, extraHttpRequestParams?: any): Observable<models.ResponseEntity> {
        return this.generateCalendarUsingPOSTWithHttpInfo(tenantId, year, daysClosed, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get availability
     *
     * @param tenantId tenantId
     * @param year year
     * @param month month (1-12)
     * @param day day (1-31)
     * @param limit limit results
     */
    public getUsingGET6(tenantId: number, year?: number, month?: number, day?: number, limit?: number, extraHttpRequestParams?: any): Observable<Array<models.Availability>> {
        return this.getUsingGET6WithHttpInfo(tenantId, year, month, day, limit, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Get Tenants
     *
     */
    public getUsingGET7(extraHttpRequestParams?: any): Observable<Array<models.Tenant>> {
        return this.getUsingGET7WithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Register a owner
     *
     * @param tenantId tenantId
     * @param owner owner
     */
    public saveUsingPOST2(tenantId: number, owner: models.Owner, extraHttpRequestParams?: any): Observable<models.Owner> {
        return this.saveUsingPOST2WithHttpInfo(tenantId, owner, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * Create Tenant
     *
     * @param tenant tenant
     */
    public createUsingPOSTWithHttpInfo(tenant: models.Tenant, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tenants`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenant' is not null or undefined
        if (tenant === null || tenant === undefined) {
            throw new Error('Required parameter tenant was null or undefined when calling createUsingPOST.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];



        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: tenant == null ? '' : JSON.stringify(tenant), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Generate Calendar of availability
     *
     * @param tenantId tenantId
     * @param year year
     * @param daysClosed daysClosed
     */
    public generateCalendarUsingPOSTWithHttpInfo(tenantId: number, year: number, daysClosed: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tenants/${tenantId}/generateCalendar/${year}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling generateCalendarUsingPOST.');
        }
        // verify required parameter 'year' is not null or undefined
        if (year === null || year === undefined) {
            throw new Error('Required parameter year was null or undefined when calling generateCalendarUsingPOST.');
        }
        // verify required parameter 'daysClosed' is not null or undefined
        if (daysClosed === null || daysClosed === undefined) {
            throw new Error('Required parameter daysClosed was null or undefined when calling generateCalendarUsingPOST.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];



        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: daysClosed == null ? '' : JSON.stringify(daysClosed), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get availability
     *
     * @param tenantId tenantId
     * @param year year
     * @param month month (1-12)
     * @param day day (1-31)
     * @param limit limit results
     */
    public getUsingGET6WithHttpInfo(tenantId: number, year?: number, month?: number, day?: number, limit?: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tenants/${tenantId}/availability`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling getUsingGET6.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];



        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            body: limit == null ? '' : JSON.stringify(limit), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Get Tenants
     *
     */
    public getUsingGET7WithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tenants`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];





        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Register a owner
     *
     * @param tenantId tenantId
     * @param owner owner
     */
    public saveUsingPOST2WithHttpInfo(tenantId: number, owner: models.Owner, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/tenants/${tenantId}/owners`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'tenantId' is not null or undefined
        if (tenantId === null || tenantId === undefined) {
            throw new Error('Required parameter tenantId was null or undefined when calling saveUsingPOST2.');
        }
        // verify required parameter 'owner' is not null or undefined
        if (owner === null || owner === undefined) {
            throw new Error('Required parameter owner was null or undefined when calling saveUsingPOST2.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            '*/*'
        ];



        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: owner == null ? '' : JSON.stringify(owner), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
