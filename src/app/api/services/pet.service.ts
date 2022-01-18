/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ApiResponse } from '../models/api-response';
import { Pet } from '../models/pet';


/**
 * Everything about your Pets
 */
@Injectable({
  providedIn: 'root',
})
export class PetService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updatePet
   */
  static readonly UpdatePetPath = '/pet';

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePet()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePet$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UpdatePetPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update an existing pet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePet$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePet(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.updatePet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation addPet
   */
  static readonly AddPetPath = '/pet';

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addPet()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPet$Response(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.AddPetPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Add a new pet to the store.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `addPet$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addPet(params: {

    /**
     * Pet object that needs to be added to the store
     */
    body: Pet
  }): Observable<void> {

    return this.addPet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation findPetsByStatus
   */
  static readonly FindPetsByStatusPath = '/pet/findByStatus';

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus$Response(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByStatusPath, 'get');
    if (params) {
      rb.query('status', params.status, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by status.
   *
   * Multiple status values can be provided with comma separated strings
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findPetsByStatus(params: {

    /**
     * Status values that need to be considered for filter
     */
    status: Array<'available' | 'pending' | 'sold'>;
  }): Observable<Array<Pet>> {

    return this.findPetsByStatus$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Path part for operation findPetsByTags
   */
  static readonly FindPetsByTagsPath = '/pet/findByTags';

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findPetsByTags()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags$Response(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<StrictHttpResponse<Array<Pet>>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.FindPetsByTagsPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"style":"form","explode":false});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Pet>>;
      })
    );
  }

  /**
   * Finds Pets by tags.
   *
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findPetsByTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   *
   * @deprecated
   */
  findPetsByTags(params: {

    /**
     * Tags to filter by
     */
    tags: Array<string>;
  }): Observable<Array<Pet>> {

    return this.findPetsByTags$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Pet>>) => r.body as Array<Pet>)
    );
  }

  /**
   * Path part for operation getPetById
   */
  static readonly GetPetByIdPath = '/pet/{petId}';

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById$Response(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<StrictHttpResponse<Pet>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.GetPetByIdPath, 'get');
    if (params) {
      rb.path('petId', params.petId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Pet>;
      })
    );
  }

  /**
   * Find pet by ID.
   *
   * Returns a single pet
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPetById(params: {

    /**
     * ID of pet to return
     */
    petId: number;
  }): Observable<Pet> {

    return this.getPetById$Response(params).pipe(
      map((r: StrictHttpResponse<Pet>) => r.body as Pet)
    );
  }

  /**
   * Path part for operation updatePetWithForm
   */
  static readonly UpdatePetWithFormPath = '/pet/{petId}';

  /**
   * Updates a pet in the store with form data.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePetWithForm()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updatePetWithForm$Response(params: {

    /**
     * ID of pet that needs to be updated
     */
    petId: number;
    body?: {

/**
 * Updated name of the pet
 */
'name'?: string;

/**
 * Updated status of the pet
 */
'status'?: string;
}
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UpdatePetWithFormPath, 'post');
    if (params) {
      rb.path('petId', params.petId, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Updates a pet in the store with form data.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updatePetWithForm$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updatePetWithForm(params: {

    /**
     * ID of pet that needs to be updated
     */
    petId: number;
    body?: {

/**
 * Updated name of the pet
 */
'name'?: string;

/**
 * Updated status of the pet
 */
'status'?: string;
}
  }): Observable<void> {

    return this.updatePetWithForm$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePet
   */
  static readonly DeletePetPath = '/pet/{petId}';

  /**
   * Deletes a pet.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePet()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePet$Response(params: {
    api_key?: string;

    /**
     * Pet id to delete
     */
    petId: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.DeletePetPath, 'delete');
    if (params) {
      rb.header('api_key', params.api_key, {});
      rb.path('petId', params.petId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Deletes a pet.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePet(params: {
    api_key?: string;

    /**
     * Pet id to delete
     */
    petId: number;
  }): Observable<void> {

    return this.deletePet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation uploadFile
   */
  static readonly UploadFilePath = '/pet/{petId}/uploadImage';

  /**
   * uploads an image.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFile()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile$Response(params: {

    /**
     * ID of pet to update
     */
    petId: number;
    body?: {

/**
 * Additional data to pass to server
 */
'additionalMetadata'?: string;

/**
 * file to upload
 */
'file'?: Blob;
}
  }): Observable<StrictHttpResponse<ApiResponse>> {

    const rb = new RequestBuilder(this.rootUrl, PetService.UploadFilePath, 'post');
    if (params) {
      rb.path('petId', params.petId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiResponse>;
      })
    );
  }

  /**
   * uploads an image.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uploadFile$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadFile(params: {

    /**
     * ID of pet to update
     */
    petId: number;
    body?: {

/**
 * Additional data to pass to server
 */
'additionalMetadata'?: string;

/**
 * file to upload
 */
'file'?: Blob;
}
  }): Observable<ApiResponse> {

    return this.uploadFile$Response(params).pipe(
      map((r: StrictHttpResponse<ApiResponse>) => r.body as ApiResponse)
    );
  }

}
