<?php

require_once( __DIR__ . '/response.php' );

/**
 * Class ResponsePropertyDetail
 * @property string ListingID
 * @property ResponseBusiness Business
 * @property string Board
 * @property ResponseBuilding Building
 * @property ResponseLand Land
 * @property ResponseAgentDetails AgentDetails
 * @property ResponseAddress Address
 * @property ResponseAlternateURL AlternateURL
 * @property string AmmenitiesNearBy
 * @property string CommunityFeatures
 * @property string CommunicationType
 * @property string Crop
 * @property string DocumentType
 * @property string EquipmentType
 * @property string Easement
 * @property string FarmType
 * @property string Features
 * @property string IrrigationType
 * @property string Lease
 * @property string LeasePerTime
 * @property string LeasePerUnit
 * @property string LeaseTermRemaining
 * @property string LeaseTermRemainingFreq
 * @property string LeaseType
 * @property string ListingContractDate
 * @property string LiveStockType
 * @property string LoadingType
 * @property string LocationDescription
 * @property string Machinery
 * @property string MaintenanceFee
 * @property string MaintenanceFeePaymentUnit
 * @property string MaintenanceFeeType
 * @property string ManagementCompany
 * @property string MunicipalID
 * @property string OwnershipType
 * @property string ParkingSpaceTotal
 * @property string Plan
 * @property string PoolFeatures
 * @property string Price
 * @property string PricePerTime
 * @property string PricePerUnit
 * @property string PropertyType
 * @property string PublicRemarks
 * @property string RentalEquipmentType
 * @property string RightType
 * @property string RoadType
 * @property string StorageType
 * @property string Structure
 * @property string SignType
 * @property string TransactionType
 * @property string TotalBuildings
 * @property string ViewType
 * @property string WaterFrontType
 * @property string WaterFrontName
 * @property string AdditionalInformationIndicator
 * @property string ZoningDescription
 * @property string ZoningType
 * @property string MoreInformationLink
 * @property string AnalyticsClick
 * @property string AnalyticsView
 * @property ResponseOpenHouse OpenHouse
 * @property ResponseEvent Event
 * @property ResponseParkingSpaces ParkingSpaces
 * @property ResponsePhoto Photo
 * @property ResponseUtilitiesAvailable UtilitiesAvailable
 */
class ResponsePropertyDetail extends Response {
	public $ID;
	public $LastUpdated;
}